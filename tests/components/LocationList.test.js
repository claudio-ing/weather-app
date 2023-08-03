import LocationList from "../../src/components/LocationList";
import { expect, describe, test, jest } from '@jest/globals';
import { mount } from '@vue/test-utils'

const locations = [
  {"name":"Milan","lat":45.4,"lon":9.18,"country":"IT","state":"Lombardy"},
  {"name":"Moscow","lat":55.75,"lon":37.61,"country":"RU","state":"Moscow"},
  {"name":"Auxerre","lat":47.79,"lon":3.57,"country":"FR","state":"Bourgogne-Franche-Comté"}
];

describe("LocationList component", () => {
  test("renders correctly - no locations", () => {
    const wrapper = mount(LocationList);
    
    const locText = wrapper.findAll('.text');
    expect(locText.length).toBe(0);
   });

   test("renders correctly locations", () => {
    const wrapper = mount(LocationList, {
      props: {
        modelValue: locations,
      }
    });

    const locText = wrapper.findAll('.text');
    expect(locText.length).toBe(locations.length);
    const expectedLocationTexts = ['Milan, IT', 'Moscow, RU', 'Auxerre, FR']
    expectedLocationTexts.forEach((text) =>
      expect(locText.some((l) => l.text().includes(text))).toBe(true)
    ); 
   });

   test("locations are updated in the component after close", () => {
    const wrapper = mount(LocationList, {
      props: {
        modelValue: locations,
      }
    });

    const removeAt = jest.spyOn(wrapper.vm, 'removeAt');
    const closeIcons = wrapper.findAll('.close'); 
    expect(closeIcons.length).toBe(locations.length);

    closeIcons[2].trigger('click');
  
    expect(removeAt).toHaveBeenCalledTimes(1);
    expect(removeAt).toHaveBeenCalledWith(2);
    
    const currentLocations = wrapper.vm.locations;
    expect(currentLocations.length).toBe(2);
    const expectedLocationNames = ['Milan', 'Moscow'];
    const unexpectedLocationNames = ['Auxerre'];

    expectedLocationNames.forEach((name) =>
      expect(currentLocations.some((l) => l.name == name)).toBe(true)
    );

    unexpectedLocationNames.forEach((name) =>
      expect(currentLocations.some((l) => l.name == name)).toBe(false)
    );
  });
})
