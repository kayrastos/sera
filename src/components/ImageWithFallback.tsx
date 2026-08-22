import React, { useState } from 'react';
import { Flame } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'SERA Görsel',
  fallbackTitle,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`w-full h-full min-h-[140px] flex flex-col items-center justify-center bg-[#1F1B17] border border-[#321816] p-6 text-center select-none ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <div className="p-3 bg-[#171411] border border-[#4A211E] rounded-full mb-3 text-[#A88558]">
          <Flame className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-serif uppercase tracking-[0.25em] text-[#DDD0BB] font-medium block">
          SERA
        </span>
        <span className="text-[11px] text-[#9E9588] font-sans font-light mt-1 max-w-[200px] truncate">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};
