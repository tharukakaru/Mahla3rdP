import { en } from '@/content/en';
import { Action, PointMark } from '@/components/primitives';
export default function NotFound() { return <div className="not-found"><PointMark/><h1>{en.ui.unavailable}</h1><p>{en.ui.unavailableBody}</p><Action href="/en">{en.ui.home}</Action></div>; }
