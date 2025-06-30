
import React from 'react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import { LocationIcon } from '@/constants';

interface MapDisplayProps {
  mapViewUrl: string;
  locationName: string;
  className?: string;
}

const MapDisplay: React.FC<MapDisplayProps> = ({ mapViewUrl, locationName, className = '' }) => {
  return (
    <GlassCard className={`flex flex-col items-center justify-center text-center p-6 md:p-8 ${className}`}>
      <LocationIcon className="w-16 h-16 text-orange-vibrant mb-6" />
      <h3 className="text-xl font-display font-semibold mb-2 text-charcoal-deep dark:text-white">
        Our Location
      </h3>
      <p className="text-charcoal-deep/80 dark:text-gray-warm/90 mb-6">
        {locationName}
      </p>
      <Button
        href={mapViewUrl}
        asLink
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        size="md"
        aria-label={`View ${locationName} on Google Maps`}
      >
        View on Google Maps
      </Button>
    </GlassCard>
  );
};

export default MapDisplay;
    