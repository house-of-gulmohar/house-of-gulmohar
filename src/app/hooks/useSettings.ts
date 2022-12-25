import { useContext } from 'react';
import { ISettingsContext, SettingsContext } from '../context/SettingsContext';

export const useSettings = () =>
  useContext(SettingsContext) as ISettingsContext;
