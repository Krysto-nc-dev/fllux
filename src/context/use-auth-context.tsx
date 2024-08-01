'use client'

import React, { ReactNode, useState, Dispatch, SetStateAction } from 'react';

type InitialValuesProps = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

const InitialValues: InitialValuesProps = {
  currentStep: 1,
  setCurrentStep: () => undefined,
};

const authContext = React.createContext<InitialValuesProps>(InitialValues);

const { Provider } = authContext;

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState<number>(InitialValues.currentStep);
  const values = {
    currentStep,
    setCurrentStep,
  };

  return <Provider value={values}>{children}</Provider>;
};

export const useAuthContextHook = () => {
  const state = React.useContext(authContext);
  if (state === undefined) {
    throw new Error('useAuthContextHook must be used within an AuthContextProvider');
  }
  return state;
};
