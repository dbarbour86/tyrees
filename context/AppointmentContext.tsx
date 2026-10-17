'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ServicePackageId } from '@/types/lead';

interface AppointmentContextValue {
  isOpen: boolean;
  selectedPackage: ServicePackageId;
  openModal: (packageId?: ServicePackageId) => void;
  closeModal: () => void;
}

const AppointmentContext = createContext<AppointmentContextValue | undefined>(undefined);

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<ServicePackageId>('titanium');

  const openModal = (packageId?: ServicePackageId) => {
    if (packageId) {
      setSelectedPackage(packageId);
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AppointmentContext.Provider value={{ isOpen, selectedPackage, openModal, closeModal }}>
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointment must be used within an AppointmentProvider');
  }
  return context;
}
