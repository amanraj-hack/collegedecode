import { useAdSense } from '../../hooks/useAdSense';
import { ADS_CONFIG } from '../../config/ads';

export default function AdBanner({ type = 'inline', slotId, format = 'auto' }) {
  useAdSense();

  if (!ADS_CONFIG.enabled) return null;

  const className = `ad-banner${type === 'sidebar' ? ' sidebar' : type === 'inline' ? ' inline' : ''}`

  return (
    <div className={className} style={{ minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client={ADS_CONFIG.publisherId}
        data-ad-slot={slotId || "placeholder"}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
