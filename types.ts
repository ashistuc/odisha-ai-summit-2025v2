import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface VisionPoint {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface EventDetail {
  label: string;
  value: string;
  icon?: React.ReactNode;
}