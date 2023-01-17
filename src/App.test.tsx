import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Act
  render(<App />);

  // Assert
  const personalInformationElement = screen.getByText(/Personal Information/i);
  expect(personalInformationElement).toBeInTheDocument();

  const familyInformationElement = screen.getByText(/Family Information/i);
  expect(familyInformationElement).toBeInTheDocument();

  const employerInformationElement = screen.getByText(/Employer Information/i);
  expect(employerInformationElement).toBeInTheDocument();

  const insuranceInformationElement = screen.getByText(/Insurance Information/i);
  expect(insuranceInformationElement).toBeInTheDocument();

  const hospitalizationInformationElement = screen.getByText(/Hospitalization Information/i);
  expect(hospitalizationInformationElement).toBeInTheDocument();

  const surgeryInformationElement = screen.getByText(/Surgery Information/i);
  expect(surgeryInformationElement).toBeInTheDocument();

  const immunizationInformationElement = screen.getByText(/Immunization Information/i);
  expect(immunizationInformationElement).toBeInTheDocument();

  const appointmentInformationElement = screen.getByText(/Appointment Information/i);
  expect(appointmentInformationElement).toBeInTheDocument();

  const painInformationElement = screen.getByText(/Pain Information/i);
  expect(painInformationElement).toBeInTheDocument();
});
