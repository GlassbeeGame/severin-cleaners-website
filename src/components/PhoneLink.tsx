'use client';

import { trackPhoneClick } from '@/lib/gtm';

interface PhoneLinkProps {
  phoneNumber?: string;
  displayNumber?: string;
  location: string;
  className?: string;
  children?: React.ReactNode;
}

export default function PhoneLink({
  phoneNumber = '+16197500114',
  displayNumber = '(619) 750-0114',
  location,
  className = '',
  children,
}: PhoneLinkProps) {
  const handleClick = () => {
    trackPhoneClick(phoneNumber.replace(/[^0-9]/g, ''), location);
  };

  return (
    <a
      href={`tel:${phoneNumber}`}
      onClick={handleClick}
      className={className}
    >
      {children || displayNumber}
    </a>
  );
}
