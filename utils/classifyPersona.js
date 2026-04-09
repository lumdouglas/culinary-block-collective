/**
 * Classifies a LinkedIn job title into a CBC outreach persona.
 * Used by the HubSpot outreach script to auto-select the correct one-pager URL.
 *
 * @param {string} title - Raw job title string from LinkedIn or HubSpot contact
 * @returns {'sarah' | 'marcus' | 'unknown'}
 */
function classifyPersona(title) {
  if (!title || typeof title !== 'string') return 'unknown';

  const normalized = title.toLowerCase().trim();

  const sarahKeywords = [
    'office manager',
    'executive assistant',
    ' ea ',
    'workplace coordinator',
    'workplace ops',
    'head of workplace',
    'facilities manager',
    'office coordinator',
    'office operations',
  ];

  const marcusKeywords = [
    'hr director',
    'head of people',
    'vp people',
    'vp of people',
    'people ops',
    'people operations',
    'vp hr',
    'vp of hr',
    'chro',
    'chief people officer',
    'chief human resources',
    'director of people',
    'director of hr',
    'director, people',
    'director, hr',
  ];

  if (sarahKeywords.some(kw => normalized.includes(kw.trim()))) return 'sarah';
  if (marcusKeywords.some(kw => normalized.includes(kw.trim()))) return 'marcus';

  return 'unknown';
}

module.exports = { classifyPersona };
