import { capitalizeFirst, formatWindDirection, formatWindStrength } from '../../src/common/utils';
import { expect, describe, test } from '@jest/globals';

describe('UtilsTest', () => {
  test.each([
    [3.1, 'N'], [14, 'NNE'], [50, 'NE'], [61, 'ENE'], [100, 'E'], [122, 'ESE'],
    [140, 'SE'], [166, 'SSE'], [180, 'S'], [210, 'SSW'], [222, 'SW'], [250, 'WSW'],
    [270, 'W'], [300, 'WNW'], [320, 'NW'], [332, 'NNW'], [356, 'N']
  ])('formatWindDirectionTest with input %s', (deg, expected) => {
    expect(formatWindDirection(deg)).toBe(expected);
  })

  test.each([
    [0.1, 'Calm'], [0.8, 'Light air'], [2.2, 'Light breeze'], [5.4, 'Gentle breeze'],
    [5.5, 'Moderate breeze'], [9, 'Fresh breeze'], [11, 'Strong breeze'],
    [14, 'High wind, moderate gale'], [19, 'Gale'], [22, 'Strong gale'],
    [27, 'Storm'], [30, 'Violent storm'], [33, 'Hurricane']
  ])('formatWindStrength with input %s', (speed, expected) => {
    expect(formatWindStrength(speed)).toBe(expected);
  })

  test.each([
    ['', ''], ['light air', 'Light air'], ['breeze', 'Breeze'],
    ['capitalize', 'Capitalize']
  ])('capitalizeFirst with input %s', (sentence, expected) => {
    expect(capitalizeFirst(sentence)).toBe(expected);
  })  
});

