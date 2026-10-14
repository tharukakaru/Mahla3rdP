import { Crown } from './crown';
import Link from 'next/link';
import { business } from '@/lib/config';
export function SignInPage({ locale }: { locale: string }) {
  return <section className="sign-in-page"><div className="sign-in-art" aria-hidden="true"><div className="aura-halo"><i/><i/><i/><Crown/></div><p>COME<br/><em>HOME</em><br/>TO YOU.</p><small>THE THIRD POINT / YOUR SPACE</small></div><div className="sign-in-panel"><span className="eyebrow">WELCOME BACK</span><h1>Your space.<br/><em>Your next chapter.</em></h1><p>Your charts, sessions and learning are waiting in your existing MAHLA account.</p><a className="pill primary" href={business.signIn}>Continue to secure sign-in <span>↗</span></a><p className="sign-in-note">You’ll sign in on mahla3rdpoint.com, where your existing account is managed.</p><Link className="text-link" href={`/${locale}/portal`}>Preview the new member space</Link><div className="sign-in-help"><span>Need a little help?</span><Link href={`/${locale}/contact`}>Contact Mahla ↗</Link></div></div></section>;
}
