// Helpers
import { buildQueryProductEndpoint } from '@helpers/products';
import { convertToSkip, debounce, isEmpty } from '@helpers/utils';

describe('Test buildQueryProductAPIEndpoint functions', () => {
  test('buildQueryProductAPIEndpoint without value', () => {
    const test = {
      standingPage: '',
      searchKeyWord: '',
      productId: '',
      category: '',
    };
    const result = buildQueryProductEndpoint(test);
    expect(result).toEqual('?limit=9&skip=0&select=title,price,images,category,thumbnail,id,description');
  });

  test('buildQueryProductAPIEndpoint with standingPage value', () => {
    const test = {
      standingPage: '1',
      searchKeyWord: '',
      productId: '',
      category: '',
    };
    const result = buildQueryProductEndpoint(test);
    expect(result).toEqual('?limit=9&skip=0&select=title,price,images,category,thumbnail,id,description');
  });

  test('buildQueryProductAPIEndpoint with searchKeyword value', () => {
    const test = {
      standingPage: '1',
      searchKeyword: 'test',
      productId: '',
      category: '',
    };
    const result = buildQueryProductEndpoint(test);
    expect(result).toEqual('/search?q=test&limit=9&skip=0');
  });

  test('buildQueryProductAPIEndpoint with category value', () => {
    const test = {
      standingPage: '',
      searchKeyWord: '',
      productId: '',
      category: 'phones',
    };
    const result = buildQueryProductEndpoint(test);
    expect(result).toEqual('/category/phones');
  });

  test('buildQueryProductAPIEndpoint with productId value', () => {
    const test = {
      standingPage: '',
      searchKeyWord: '',
      productId: '1',
      category: '',
    };
    const result = buildQueryProductEndpoint(test);
    expect(result).toEqual('/1');
  });
});

describe('Test convertToSkip function', () => {
  test('convert string to number and time by 9', () => {
    const result = convertToSkip('2');
    expect(result).toEqual(9);
  });
});

describe('Test isEmpty function', () => {
  test('check the param with empty value', () => {
    // Empty string
    let result = isEmpty('');
    expect(result).toBeTruthy();

    // Empty array
    result = isEmpty([]);
    expect(result).toBeTruthy();

    // Empty object
    result = isEmpty({});
    expect(result).toBeTruthy();

    // With null
    result = isEmpty(null);
    expect(result).toBeTruthy();

    // Empty object
    result = isEmpty(undefined);
    expect(result).toBeTruthy();

    // Empty number
    result = isEmpty(0);
    expect(result).toBeFalsy();
  });

  test('check the param with value', () => {
    let result = isEmpty('test value');
    expect(result).toBeFalsy();

    // With array
    result = isEmpty(['123']);
    expect(result).toBeFalsy();

    // With object
    result = isEmpty({a: 'b'});
    expect(result).toBeFalsy();
  });
});

describe('Test debounce function', () => {
  const mockFn = jest.fn();
  const debounceFn = debounce(mockFn, 1000);

  jest.useFakeTimers();
  debounceFn();
  expect(mockFn).not.toHaveBeenCalled();

  jest.runAllTimers();
  expect(mockFn).toHaveBeenCalledTimes(1);
  jest.useRealTimers();
});
