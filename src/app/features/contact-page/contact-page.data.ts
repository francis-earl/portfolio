import { PageHeaderContent } from '../../shared/models/page-header.model';
import { ContactInfo } from './contact-page.model';

const EMAIL: string = 'francisearl.fojas@gmail.com';
const MOBILE: string = '9984433996';
const LINKEDIN: string = 'linkedin.com/in/earlfojas';
const GITHUB: string = 'github.com/francis-earl';

export const PAGE_HEADER_CONTENT: PageHeaderContent = {
  label: '// CONTACT',
  title: 'Get in Touch',
  description1: `I'm always excited to connect with fellow developers, recruiters, and teams working on meaningful products.`,
  description2: `If you have an opportunity, a question, or just want to say hi, I'd love to hear from you.`,
};

export const CONTACT_INFO_ITEMS: ContactInfo[] = [
  {
    icon: 'heroEnvelope',
    label: 'Email',
    value: EMAIL,
    link: `mailto:${EMAIL}`,
    isPrimary: true,
  },
  {
    icon: 'heroDevicePhoneMobileSolid',
    label: 'Phone',
    value: `+63 ${MOBILE}`,
    link: `tel:+63${MOBILE}`,
    isPrimary: false,
  },
  {
    icon: 'diLinkedinPlain',
    label: 'Linkedin',
    value: LINKEDIN,
    link: `https://${LINKEDIN}`,
    isPrimary: false,
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    icon: 'diGithubOriginal',
    label: 'GitHub',
    value: GITHUB,
    link: `https://${GITHUB}`,
    isPrimary: false,
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];
