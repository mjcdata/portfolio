'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';

export default function AboutItems({ icon, iconName, iconClass, title, description }) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
      <div className="w-16 h-16 mb-2 flex justify-center items-center rounded-full">
        {iconName ? (
          <Icon icon={iconName} width={48} height={48} className={iconClass} />
        ) : (
          <FontAwesomeIcon icon={icon} size="3x" className={iconClass} />
        )}
      </div>
      <h3 className="text-lg font-bold text-black">{title}</h3>
      <p className="text-center text-black">{description}</p>
    </div>
  );
}