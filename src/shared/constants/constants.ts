import isEmpty from 'lodash/isEmpty';

const prefix = '';
const BASE_URL = process.env.BASE_URL || '';

export const API_CONFIG = {
  BASE_URL,
  PATH: {
    JWT_LOGIN: `${prefix}jwt/login`,
    COMPANIES: `${prefix}companies/`
  }
};

export const STRINGS = {
  USER_KEY: 'user',
  TOKEN_KEY: 'token'
};

export enum URLS {
  LOGIN = '/auth/login',
  SIGNUP = '/auth/signup',
  DASHBOARD = '/dashboard'
}

export const SECRET_KEY = process.env.SECRET_KEY || '';

export const getUrl = (url: string, params: Record<string, any> = {}): string => {
  let urlString = url;
  if (!/^https?:\/\//.test(urlString)) {
    // if it does not start with http/https, add the base URL
    urlString = `${BASE_URL}/${urlString}`;
  }

  if (params && !isEmpty(params)) {
    urlString += `?${new URLSearchParams(params).toString()}`;
  }
  return urlString;
};
