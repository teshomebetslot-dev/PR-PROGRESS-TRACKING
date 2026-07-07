export type SubStep = {
  title: string
  description: string
  resources: { label: string; url: string }[]
}

export type Task = {
  id: string
  title: string
  description: string
  subSteps?: SubStep[]
  timeline: string
  hours: string
  resource: {
    label: string
    url: string
  }
  expansion?: boolean
}

export type Quarter = {
  id: string
  label: string
  period: string
  theme: string
  tasks: Task[]
}

export const WEEKLY_RHYTHM = [
  {
    day: 'Session 1',
    duration: '~1 hr',
    focus: 'Learn',
    detail: 'Work through one lesson from the resource attached to your current task.',
  },
  {
    day: 'Session 2',
    duration: '~2 hrs',
    focus: 'Create',
    detail: 'Batch-produce content: design posts, write captions, edit photos or clips.',
  },
  {
    day: 'Session 3',
    duration: '~1 hr',
    focus: 'Publish + Engage',
    detail: 'Schedule the week\u2019s posts, reply to comments, and log quick metrics.',
  },
]

export const QUARTERS: Quarter[] = [
  {
    id: 'prep',
    label: 'Prep',
    period: 'Early July 2026',
    theme: 'Set up your systems before the year starts',
    tasks: [
      {
        id: 'prep-hq',
        title: 'Create your PR HQ',
        description:
          'Set up a Google Drive folder structure (Photos, Designs, Reports, Templates) and a simple content calendar spreadsheet. Everything you make this year lives here \u2014 it becomes your handover pack later.',
        timeline: 'Jul 1 \u2013 7, 2026',
        hours: '2\u20133 hrs',
        resource: {
          label: 'Hootsuite \u2014 How to Create a Social Media Content Calendar',
          url: 'https://blog.hootsuite.com/how-to-create-a-social-media-content-calendar/',
        },
      },
      {
        id: 'prep-brand',
        title: 'Download official Rotaract brand assets',
        description:
          'Get the official Rotaract logos, colors, and fonts from the Rotary Brand Center. Using correct branding is the fastest way to look professional \u2014 and it\u2019s required for district visibility.',
        timeline: 'Jul 1 \u2013 7, 2026',
        hours: '1\u20132 hrs',
        resource: {
          label: 'Rotary Brand Center (free account with My Rotary)',
          url: 'https://brandcenter.rotary.org/',
        },
      },
      {
        id: 'prep-canva',
        title: 'Learn Canva fundamentals',
        description:
          'Canva will be your main design tool all year. Complete the free "Canva Essentials" course so templates, brand kits, and resizing feel natural before Q1 design work begins.',
        timeline: 'Jul 1 \u2013 14, 2026',
        hours: '3\u20134 hrs total',
        subSteps: [
          {
            title: 'Set up your brand color palette',
            description: 'Input the official Rotaract hex codes (Royal Blue #003DA5, Gold #F7A800) and secondary tones into the Canva brand workspace.',
            resources: [
              { label: 'Building Brand Systems in Canva (Canva Design School)', url: 'https://www.canva.com/design-school/courses/building-brand-systems-in-canva' },
              { label: 'A Flexible Home for Your Brand (Canva Design School)', url: 'https://www.canva.com/design-school/resources/flexible-home-for-your-brand' },
            ],
          },
          {
            title: 'Configure typography hierarchy',
            description: 'Select serif fonts for headings and clean sans-serif styles for body text. Save them as default font pairings in your brand kit.',
            resources: [
              { label: 'Typography & Layout (Canva Design School)', url: 'https://www.canva.com/design-school/courses/' },
              { label: 'Graphic Design Essentials (HubSpot Academy)', url: 'https://academy.hubspot.com/courses/social-media' },
            ],
          },
          {
            title: 'Upload your logo assets',
            description: 'Upload transparent-background PNG and SVG versions of the Rotaract Club of Debo logo into the brand kit for one-click access.',
            resources: [
              { label: 'Rotary Brand Center — Logos for Clubs', url: 'https://brandcenter.rotary.org/en-us/our-brand/brand-elements/logos-and-graphics/logos-for-clubs-districts-and-zones' },
            ],
          },
          {
            title: 'Practice with templates',
            description: 'Create 2-3 practice posts using your new brand kit to get comfortable with Canva\'s editor, resizing, and export options.',
            resources: [
              { label: 'Canva Design School — Courses', url: 'https://www.canva.com/design-school/courses/' },
            ],
          },
        ],
        resource: {
          label: 'Canva Design School (free courses)',
          url: 'https://www.canva.com/design-school/',
        },
      },
    ],
  },
  {
    id: 'q1',
    label: 'Q1',
    period: 'July \u2013 September 2026',
    theme: 'Foundation: brand, audit, and a sustainable posting rhythm',
    tasks: [
      {
        id: 'q1-audit',
        title: 'Run a platform audit',
        description:
          'List every club account (Instagram, Facebook, LinkedIn, TikTok). Record follower counts, last post date, who has passwords, and bio quality. Fix bios, links, and profile photos as you go.',
        timeline: 'Jul 8 \u2013 21, 2026',
        hours: '3\u20134 hrs',
        subSteps: [
          {
            title: 'Catalog every active account',
            description: 'List every club social media account, website domain, and external registry. Note URLs, login status, and who manages each one.',
            resources: [
              { label: 'Social Media Audit Template (Hootsuite)', url: 'https://blog.hootsuite.com/social-media-audit/' },
              { label: 'The 15-Minute Social Media Audit (Buffer)', url: 'https://buffer.com/resources/social-media-templates/' },
            ],
          },
          {
            title: 'Record key metrics per platform',
            description: 'Log follower counts, last post date, average engagement, and bio quality into a tracking sheet.',
            resources: [
              { label: 'Social Media Calendar Template (Buffer)', url: 'https://buffer.com/resources/social-media-calendar-template/' },
            ],
          },
          {
            title: 'Identify password gaps',
            description: 'Note which accounts have no recovered password or shared login. Flag these for recovery.',
            resources: [
              { label: 'Knowledge Transfer SOP Template (Scribehow)', url: 'https://scribehow.com/library/sop-template' },
            ],
          },
          {
            title: 'Fix bios, links, and profile photos',
            description: 'Update every profile with consistent bio copy, the club website link, and the official logo as the profile image.',
            resources: [
              { label: 'Build Connection With Your Community on Instagram (Meta Blueprint)', url: 'https://www.facebookblueprint.com/student/collection/507784-instagram-marketing' },
            ],
          },
        ],
        resource: {
          label: 'Buffer \u2014 How to Perform a Social Media Audit',
          url: 'https://buffer.com/library/social-media-audit/',
        },
      },
      {
        id: 'q1-platforms',
        title: 'Choose 2 primary platforms',
        description:
          'You cannot run 4 platforms well alone on 3\u20135 hrs/week. Pick Instagram plus one more (based on your audit) as primary. Others get cross-posts only. Expand when the team grows.',
        timeline: 'Jul 22 \u2013 28, 2026',
        hours: '1 hr',
        resource: {
          label: 'Hootsuite \u2014 How to Create a Social Media Strategy',
          url: 'https://blog.hootsuite.com/how-to-create-a-social-media-marketing-plan/',
        },
      },
      {
        id: 'q1-brand-refresh',
        title: 'Brand refresh: build your template kit',
        description:
          'In Canva, create a brand kit (colors, fonts, logo) and 4\u20135 reusable post templates: event announcement, event recap, #MeetDebo spotlight, quote card, and story template. This makes every future post a 15-minute job.',
        timeline: 'Aug 1 \u2013 31, 2026',
        hours: '6\u20138 hrs total',
        subSteps: [
          {
            title: 'Lock your brand colors and fonts in Canva',
            description: 'Input the official Rotaract hex codes and upload club logos into a new Canva brand kit. Set serif/sans-serif defaults.',
            resources: [
              { label: 'Building Brand Systems in Canva', url: 'https://www.canva.com/design-school/courses/building-brand-systems-in-canva' },
              { label: 'A Flexible Home for Your Brand (Canva)', url: 'https://www.canva.com/design-school/resources/flexible-home-for-your-brand' },
            ],
          },
          {
            title: 'Create an event announcement template',
            description: 'Design a reusable layout with placeholders for event title, date, location, and a QR code or link.',
            resources: [
              { label: 'Designing Brand Templates (Canva Design School)', url: 'https://www.canva.com/design-school/courses/' },
            ],
          },
          {
            title: 'Create an event recap template',
            description: 'Build a photo-grid layout with space for 3-4 highlight images, a thank-you message, and key stats.',
            resources: [
              { label: 'Visual Social Media Templates (HubSpot/Buffer)', url: 'https://buffer.com/resources/social-media-templates/' },
            ],
          },
          {
            title: 'Create a #MeetDebo spotlight template',
            description: 'Design a high-contrast portrait layout featuring member photo, name, role, and a short quote.',
            resources: [
              { label: 'How to Make Your Instagram Content Stand Out (Meta Blueprint)', url: 'https://www.facebookblueprint.com/student/collection/507784-instagram-marketing' },
            ],
          },
          {
            title: 'Create quote card and story templates',
            description: 'Design a simple quote card and an Instagram Story sized template for quick daily content.',
            resources: [
              { label: 'Graphic Design Essentials (HubSpot Academy)', url: 'https://academy.hubspot.com/courses/social-media' },
            ],
          },
        ],
        resource: {
          label: 'Canva \u2014 Brand Kits and Templates course',
          url: 'https://www.canva.com/design-school/courses/',
        },
      },
      {
        id: 'q1-strategy',
        title: 'Write a 1-page PR strategy',
        description:
          'One page: who the audience is, 3\u20134 content pillars (service projects, members, Hidden Ethiopia, club life), posting cadence, and the follower target (1,262 \u2192 1,800+). Share it with the club board.',
        timeline: 'Aug 15 \u2013 31, 2026',
        hours: '2\u20133 hrs',
        subSteps: [
          {
            title: 'Research your audience and club story',
            description: 'Document the club\'s origin, the "Eclectic in One" motto, and key demographics of your local audience.',
            resources: [
              { label: 'The Power of Storytelling (HubSpot Academy)', url: 'https://academy.hubspot.com/courses/social-media' },
              { label: 'Content Marketing Certification (HubSpot Academy)', url: 'https://academy.hubspot.com/courses/content-marketing' },
            ],
          },
          {
            title: 'Define content pillars',
            description: 'Choose 3-4 core themes: Service Projects, Member Spotlights, Hidden Ethiopia, Club Life. Each pillar gets a goal and post frequency.',
            resources: [
              { label: 'Developing a Social Media Strategy (HubSpot Academy)', url: 'https://academy.hubspot.com/courses/social-media' },
            ],
          },
          {
            title: 'Draft the one-page document',
            description: 'Write a single page covering: audience, pillars, posting cadence (2/week), follower target, and success metrics.',
            resources: [
              { label: 'Create Authentic Messages (Meta Blueprint)', url: 'https://www.facebookblueprint.com/student/catalog/list?page=3&search=instagram' },
            ],
          },
          {
            title: 'Present to the club board',
            description: 'Share the one-page strategy at a board meeting. Get buy-in on the content pillars and follower targets.',
            resources: [
              { label: 'Rotary — Promote Your Club (PR resources)', url: 'https://my.rotary.org/en/learning-reference/learn-topic/public-relations' },
            ],
          },
        ],
        resource: {
          label: 'Meta Blueprint (free social marketing courses)',
          url: 'https://www.facebook.com/business/learn',
        },
      },
      {
        id: 'q1-meetdebo',
        title: 'Launch #MeetDebo \u2014 monthly member spotlight',
        description:
          'Start as monthly (not weekly \u2014 you\u2019re solo). Create a 5-question interview form, photograph or collect a photo of one member, and publish using your spotlight template. Batch 2\u20133 interviews at each club meeting.',
        timeline: 'Sep 2026, then monthly',
        hours: '2 hrs/month',
        subSteps: [
          {
            title: 'Create an interview form',
            description: 'Write 5 simple questions (e.g. name, role, why you joined, favorite project, fun fact). Use Google Forms so responses are easy to collect.',
            resources: [
              { label: 'How to Make Your Instagram Content Stand Out (Meta Blueprint)', url: 'https://www.facebookblueprint.com/student/collection/507784-instagram-marketing' },
            ],
          },
          {
            title: 'Design the spotlight template',
            description: 'Use your brand kit to build a high-contrast Canva template: member photo, name, role, short quote. Keep it consistent every month.',
            resources: [
              { label: 'Graphic Design Essentials (HubSpot Academy)', url: 'https://academy.hubspot.com/lessons/ad-copy-creative-conversion' },
              { label: 'Visual Social Media Templates (HubSpot/Buffer)', url: 'https://buffer.com/resources/social-media-templates/' },
            ],
          },
          {
            title: 'Write engaging captions',
            description: 'Use the Before-After-Bridge formula: show who they were before Rotaract, what changed, and how service shaped them.',
            resources: [
              { label: 'How to Write Ad Copy (HubSpot Academy)', url: 'https://academy.hubspot.com/lessons/ad-copy-creative-conversion' },
            ],
          },
          {
            title: 'Publish and tag',
            description: 'Post with alt-text on images, tag the featured member, and share the post in club WhatsApp groups to boost reach.',
            resources: [
              { label: 'Instagram Marketing Collection (Meta Blueprint)', url: 'https://www.facebookblueprint.com/student/collection/507784-instagram-marketing' },
            ],
          },
        ],
        resource: {
          label: 'Later \u2014 Instagram Marketing Guide',
          url: 'https://later.com/blog/instagram-marketing/',
        },
      },
      {
        id: 'q1-rhythm',
        title: 'Start the 2-posts-per-week rhythm',
        description:
          'Begin consistent posting: 2 quality posts per week on your primary platforms (scale to 3 when you have help). Use a free scheduler (Meta Business Suite) to batch a week in one sitting.',
        timeline: 'Sep 1, 2026 onward',
        hours: '2 hrs/week ongoing',
        subSteps: [
          {
            title: 'Connect your accounts to Meta Business Suite',
            description: 'Link the club\'s Facebook Page and Instagram Account in Meta Business Suite for free scheduling.',
            resources: [
              { label: 'How to Post on a Facebook Page (Meta Blueprint)', url: 'https://www.facebookblueprint.com/' },
              { label: 'Meta Business Suite — Scheduling Posts', url: 'https://www.facebook.com/business/tools/meta-business-suite' },
            ],
          },
          {
            title: 'Set up Buffer for additional platforms',
            description: 'Create a free Buffer account and connect LinkedIn and TikTok for cross-posting.',
            resources: [
              { label: 'Social Media Marketing Certification (HubSpot Academy)', url: 'https://academy.hubspot.com/courses/social-media' },
            ],
          },
          {
            title: 'Schedule posting slots at peak hours',
            description: 'Configure your weekly slots for East Africa peak times: weekdays 9 AM and 6 PM. Batch all posts in one sitting.',
            resources: [
              { label: 'Your Complete Guide to Social Media Marketing (Buffer)', url: 'https://buffer.com/resources/social-media-marketing-guide/' },
            ],
          },
          {
            title: 'Set up review notifications',
            description: 'Configure alerts so drafted posts are reviewed before publishing. This keeps quality consistent.',
            resources: [
              { label: 'The 15-Minute Social Media Audit (Buffer)', url: 'https://buffer.com/resources/social-media-templates/' },
            ],
          },
        ],
        resource: {
          label: 'Meta Business Suite \u2014 Scheduling Posts',
          url: 'https://www.facebook.com/business/tools/meta-business-suite',
        },
      },
      {
        id: 'q1-baseline',
        title: 'Record baseline metrics',
        description:
          'Log current followers, average likes, reach, and engagement for each platform in a simple sheet. You\u2019ll update this monthly \u2014 it becomes the backbone of your Q4 report.',
        timeline: 'Sep 20 \u2013 30, 2026',
        hours: '1 hr',
        resource: {
          label: 'Instagram Insights explained (Later guide)',
          url: 'https://later.com/blog/instagram-analytics/',
        },
      },
    ],
  },
  {
    id: 'q2',
    label: 'Q2',
    period: 'October \u2013 December 2026',
    theme: 'Content engine: writing, video, press kit \u2014 and your first recruit',
    tasks: [
      {
        id: 'q2-copywriting',
        title: 'Learn copywriting basics',
        description:
          'Better captions = more engagement. Take the free Google Digital Garage digital marketing fundamentals course (do the content/social modules) and practice on your weekly posts.',
        timeline: 'Oct 1 \u2013 31, 2026',
        hours: '1 hr/week in Oct',
        resource: {
          label: 'Google Digital Garage \u2014 Fundamentals of Digital Marketing (free, certified)',
          url: 'https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing',
        },
      },
      {
        id: 'q2-calendar',
        title: 'Build the Oct\u2013Dec content calendar',
        description:
          'Map every known club event, Rotary observance (e.g. World Polio Day Oct 24), and #MeetDebo slot into your calendar sheet. Planning ahead is what makes 3\u20135 hrs/week enough.',
        timeline: 'Oct 1 \u2013 10, 2026',
        hours: '2 hrs',
        subSteps: [
          {
            title: 'Define your content pillars',
            description: 'Choose 4-5 pillars like Service Projects, Member Spotlights, Professional Development, and Foundation Impact. Each gets a colour code in your calendar.',
            resources: [
              { label: 'Social Media Calendar Template (Buffer)', url: 'https://buffer.com/resources/social-media-calendar-template/' },
              { label: 'Developing a Social Media Strategy (HubSpot Academy)', url: 'https://academy.hubspot.com/courses/social-media' },
            ],
          },
          {
            title: 'Set up the master calendar in Google Sheets',
            description: 'Create columns: publish date, platform, caption, visual link, status. Share it with your PR volunteer.',
            resources: [
              { label: 'Social Media Content Calendar Guide (Promotedge)', url: 'https://www.promotedge.com/knowledge/social-media-content-calendar-guide/' },
            ],
          },
          {
            title: 'Pre-populate key dates',
            description: 'Add Rotary observance days (World Polio Day Oct 24, etc.), club events, and #MeetDebo monthly slots.',
            resources: [
              { label: 'Rotary — Calendar of Special Observances', url: 'https://my.rotary.org/en/news-media/calendar' },
            ],
          },
          {
            title: 'Batch content 2 weeks ahead',
            description: 'Use your calendar to batch-design and schedule posts two weeks in advance using Meta Business Suite or Buffer.',
            resources: [
              { label: 'Social Media Calendar: Tools and Templates (Hootsuite)', url: 'https://blog.hootsuite.com/social-media-calendar/' },
            ],
          },
        ],
        resource: {
          label: 'Rotary \u2014 Calendar of Special Observances',
          url: 'https://my.rotary.org/en/news-media/calendar',
        },
      },
      {
        id: 'q2-presskit',
        title: 'Create the club press kit',
        description:
          'A single polished PDF: club history, mission, key projects (Hidden Ethiopia!), impact numbers, leadership contacts, and logos. This is what unlocks sponsorships and media coverage.',
        timeline: 'Nov 1 \u2013 30, 2026',
        hours: '4\u20135 hrs total',
        subSteps: [
          {
            title: 'Gather past project data and impact numbers',
            description: 'Collect photos, fundraising totals, volunteer hours, and project descriptions from the year so far.',
            resources: [
              { label: 'Free Media Kit Template (HubSpot)', url: 'https://www.hubspot.com/resources/templates/sop-template' },
              { label: 'Nonprofit Media Kit Template (Xtensio)', url: 'https://xtensio.com/nonprofit-media-kit-template/' },
            ],
          },
          {
            title: 'Customise a Canva media kit template',
            description: 'Find a free media kit template in Canva and adapt it to your brand kit — colours, fonts, and club logo.',
            resources: [
              { label: 'Building Brand Systems in Canva', url: 'https://www.canva.com/design-school/courses/building-brand-systems-in-canva' },
            ],
          },
          {
            title: 'Write the sponsorship pitch',
            description: 'Include: who you are, what you\'ve achieved, why a partner should sponsor, and what they get in return.',
            resources: [
              { label: 'How to Write Ad Copy (HubSpot Academy)', url: 'https://academy.hubspot.com/lessons/ad-copy-creative-conversion' },
              { label: 'Nonprofit Press Release PDF Template (Jotform)', url: 'https://www.jotform.com/templates/nonprofit-press-release' },
            ],
          },
          {
            title: 'Export and share as PDF',
            description: 'Export the completed press kit as a high-resolution PDF. Share it with the fundraising committee and store in your PR HQ.',
            resources: [
              { label: 'Nonprofit Media Kit Template (Xtensio)', url: 'https://xtensio.com/nonprofit-media-kit-template/' },
            ],
          },
        ],
        resource: {
          label: 'Prezly \u2014 How to Create a Press Kit',
          url: 'https://www.prezly.com/academy/how-to-create-a-press-kit',
        },
      },
      {
        id: 'q2-video',
        title: 'Learn phone videography + CapCut editing',
        description:
          'You don\u2019t need a camera crew. Learn to shoot steady phone footage (landscape + vertical) and edit reels in CapCut (free). Practice by making one 30-second reel from an existing event.',
        timeline: 'Oct \u2013 Nov 2026',
        hours: '1 hr/week for 6 weeks',
        subSteps: [
          {
            title: 'Learn the basics of shooting on a phone',
            description: 'Watch tutorials on stabilisation, lighting, and framing. Practice shooting both landscape and vertical footage.',
            resources: [
              { label: 'CapCut Tutorial for Beginners', url: 'https://www.capcut.com/resource/capcut-tutorial-for-beginners' },
            ],
          },
          {
            title: 'Practice trimming and combining clips',
            description: 'Import 3-4 short clips into CapCut, trim the best moments, and arrange them in order. Add crossfade transitions.',
            resources: [
              { label: 'CapCut Mobile Tutorial: Beginner to Pro (YouTube)', url: 'https://www.youtube.com/watch?v=SA9UZzi9J5Q' },
            ],
          },
          {
            title: 'Add text overlays and music',
            description: 'Learn to overlay captions, pick background music from CapCut\'s library, and adjust audio levels so voices are clear.',
            resources: [
              { label: 'CapCut Video Editing Course', url: 'https://www.capcut.com/resource/capcut-tutorial-for-beginners' },
              { label: 'Video Editing Basics for Beginners (CapCut)', url: 'https://www.capcut.com/resource' },
            ],
          },
          {
            title: 'Export at the right dimensions',
            description: 'Export your practice reel at 1080x1920 (vertical for Reels/TikTok) and 1920x1080 (landscape for YouTube). Check the quality before sharing.',
            resources: [
              { label: 'Tips for Creating Engaging Mobile Ads (Meta Blueprint)', url: 'https://www.facebookblueprint.com/student/catalog/list?page=3&search=instagram' },
            ],
          },
        ],
        resource: {
          label: 'CapCut tutorials + YouTube: \u201Csmartphone videography basics\u201D',
          url: 'https://www.capcut.com/resource',
        },
      },
      {
        id: 'q2-reel',
        title: 'Produce the club highlights reel',
        description:
          'Scoped for solo: a 2\u20133 minute highlights reel (not a full documentary) using your best footage and photos from Jul\u2013Dec. Premiere it at a club meeting and post a 60-second cut online.',
        timeline: 'Dec 1 \u2013 31, 2026',
        hours: '5\u20136 hrs total',
        subSteps: [
          {
            title: 'Gather your best footage and photos',
            description: 'Collect all photos and video clips from July to December. Pick the 10-15 strongest moments.',
            resources: [
              { label: 'CapCut Video Editing Course', url: 'https://www.capcut.com/resource/capcut-tutorial-for-beginners' },
            ],
          },
          {
            title: 'Build a chronological narrative',
            description: 'Arrange clips in CapCut starting from the Prep phase through Q2. Add captions to label each project or event.',
            resources: [
              { label: 'How to Edit Videos in CapCut for Beginners (Trevor Jones)', url: 'https://www.youtube.com/watch?v=SA9UZzi9J5Q' },
            ],
          },
          {
            title: 'Record voiceover and balance audio',
            description: 'Write a short script highlighting key achievements. Record voiceover on your phone and sync it with the timeline in CapCut.',
            resources: [
              { label: 'CapCut Mobile Tutorial: Beginner to Pro (YouTube)', url: 'https://www.youtube.com/watch?v=SA9UZzi9J5Q' },
            ],
          },
          {
            title: 'Export and post a 60-second cut',
            description: 'Export the full reel for club meetings. Make a 60-second vertical version for Instagram Reels and TikTok.',
            resources: [
              { label: 'Tips for Creating Engaging Mobile Ads (Meta Blueprint)', url: 'https://www.facebookblueprint.com/student/catalog/list?page=3&search=instagram' },
            ],
          },
        ],
        resource: {
          label: 'CapCut \u2014 Video Editing Guide',
          url: 'https://www.capcut.com/learn',
        },
      },
      {
        id: 'q2-recruit',
        title: 'Recruit your first PR volunteer',
        description:
          'Team expansion step 1. Announce at a club meeting: you need one photographer OR one writer, ~1 hr/week. Give them one clearly-defined recurring task (e.g. shoot every event). This frees you to grow everything else.',
        timeline: 'Nov 2026',
        hours: '1\u20132 hrs',
        expansion: true,
        resource: {
          label: 'Asana \u2014 How to Delegate Effectively',
          url: 'https://asana.com/resources/how-to-delegate',
        },
      },
    ],
  },
  {
    id: 'q3',
    label: 'Q3',
    period: 'January \u2013 March 2027',
    theme: 'Reach: newsletter, website, district visibility \u2014 and building the committee',
    tasks: [
      {
        id: 'q3-mailchimp',
        title: 'Learn Mailchimp (free tier)',
        description:
          'Set up a free Mailchimp account, import member/partner emails (with permission), and build a simple newsletter template from your brand kit.',
        timeline: 'Jan 1 \u2013 15, 2027',
        hours: '2\u20133 hrs',
        subSteps: [
          {
            title: 'Create a free Mailchimp account',
            description: 'Sign up with the club\'s official email address. Set your physical location and sender details in the settings.',
            resources: [
              { label: 'Getting Started with Mailchimp', url: 'https://mailchimp.com/help/create-an-account/' },
              { label: 'Mailchimp 101 (official guides)', url: 'https://mailchimp.com/resources/mailchimp-101/' },
            ],
          },
          {
            title: 'Import your contact list',
            description: 'Organise member and partner emails into a CSV file. Import them into Mailchimp and organise into segments (members, partners, alumni).',
            resources: [
              { label: 'Setting Up Your Audience by Importing Your List (Jelly Academy)', url: 'https://mailchimp.com/help/create-an-account/' },
            ],
          },
          {
            title: 'Build a sign-up form',
            description: 'Create an embedded sign-up form in Mailchimp and add it to the club website so new visitors can subscribe.',
            resources: [
              { label: 'Signup Forms — Build Your List for Free (Mailchimp)', url: 'https://mailchimp.com/signup-referrals/' },
            ],
          },
          {
            title: 'Verify your sending domain',
            description: 'Complete domain verification (SPF and DKIM) so your emails land in inboxes, not spam folders.',
            resources: [
              { label: 'Verify Your Sending Domain (Mailchimp Support)', url: 'https://mailchimp.com/help/create-an-account/' },
            ],
          },
        ],
        resource: {
          label: 'Mailchimp 101 (official getting-started guides)',
          url: 'https://mailchimp.com/resources/mailchimp-101/',
        },
      },
      {
        id: 'q3-newsletter',
        title: 'Publish the first monthly newsletter',
        description:
          'Issue #1 in January: recent projects, #MeetDebo highlight, upcoming events, one call-to-action. Keep it short (5-minute read). Then repeat monthly \u2014 reuse the template every time.',
        timeline: 'Jan 2027, then monthly',
        hours: '2 hrs/month',
        subSteps: [
          {
            title: 'Design your newsletter template',
            description: 'Use Mailchimp\'s drag-and-drop editor to build a template with your brand colours, logo, and font choices from Canva.',
            resources: [
              { label: 'Mailchimp — How to Write a Newsletter', url: 'https://mailchimp.com/resources/how-to-write-a-newsletter/' },
            ],
          },
          {
            title: 'Write the first issue',
            description: 'Include: a welcome note, recent project highlight, #MeetDebo member spotlight, upcoming events, and one call-to-action.',
            resources: [
              { label: 'Content Marketing Certification (HubSpot Academy)', url: 'https://academy.hubspot.com/courses/content-marketing' },
            ],
          },
          {
            title: 'Test and proof before sending',
            description: 'Send a test to yourself, check formatting on mobile and desktop, and proofread all links.',
            resources: [
              { label: 'Getting Started with Mailchimp', url: 'https://mailchimp.com/help/create-an-account/' },
            ],
          },
          {
            title: 'Schedule the monthly send',
            description: 'Set a recurring monthly send date (e.g. first Monday). Reuse the same template each month \u2014 just swap in fresh content.',
            resources: [
              { label: 'Mailchimp 101 (official guides)', url: 'https://mailchimp.com/resources/mailchimp-101/' },
            ],
          },
        ],
        resource: {
          label: 'Mailchimp \u2014 How to Write a Newsletter',
          url: 'https://mailchimp.com/resources/how-to-write-a-newsletter/',
        },
      },
      {
        id: 'q3-website',
        title: 'Overhaul racdebo.org',
        description:
          'Rebuild the club website: home, about, projects (Hidden Ethiopia gallery), join us, and contact pages. Use a no-code builder or v0 so you can maintain it yourself without a developer.',
        timeline: 'Feb 1 \u2013 Mar 15, 2027',
        hours: '2 hrs/week for 6 weeks',
        subSteps: [
          {
            title: 'Set up Google Sites with a blank template',
            description: 'Log into Google Sites with the club\'s Gmail account, click Blank template, and name it "racdebo_public_image_portal".',
            resources: [
              { label: 'Create your first site with Google Sites', url: 'https://support.google.com/a/users/answer/9310491?hl=en' },
            ],
          },
          {
            title: 'Configure brand theme and colour palette',
            description: 'Navigate to Themes > Create Theme. Input hex code #003DA5 as the primary colour, #F7A800 as secondary, and choose a clean dark neutral as background.',
            resources: [
              { label: 'Building Brand Systems in Canva (Canva Design School)', url: 'https://www.canva.com/design-school/courses/building-brand-systems-in-canva' },
            ],
          },
          {
            title: 'Build core pages: Home, About, Projects, Join Us, Contact',
            description: 'Create page structure with Home (interactive banner, mission, contact form), About (history, motto, board profiles), Projects (Hidden Ethiopia gallery), Join Us, and Contact.',
            resources: [
              { label: 'Creating Simple Websites — Google Sites Tutorial', url: 'https://sites.google.com/view/creatingsimplewebsites/googlesites' },
              { label: 'Google Sites Tutorial for Beginners (YouTube)', url: 'https://www.youtube.com/watch?v=LQ01pkTWcdw' },
            ],
          },
          {
            title: 'Map a custom domain (www.racdebo.org)',
            description: 'Verify site ownership in Google Search Console, add a CNAME record pointing www to ghs.googlehosted.com, and link the domain in Google Sites Settings.',
            resources: [
              { label: 'Build a FREE Website with Google Sites (YouTube)', url: 'https://www.youtube.com/watch?v=dKpPpUGWRuw' },
            ],
          },
        ],
        resource: {
          label: 'v0 by Vercel \u2014 build and publish a site by describing it',
          url: 'https://v0.app',
        },
      },
      {
        id: 'q3-district',
        title: 'D9212 integration push',
        description:
          'Submit one club story per month to District 9212 newsletters and social channels, tag district accounts in major posts, and connect with other clubs\u2019 PR directors for cross-promotion.',
        timeline: 'Jan \u2013 Mar 2027, ongoing',
        hours: '1 hr/month',
        subSteps: [
          {
            title: 'Collect one impactful club story each month',
            description: 'Identify a recent project, member achievement, or event worth sharing at district level. Write a 200-word summary with 2-3 photos.',
            resources: [
              { label: 'Rotary — Promote Your Club (PR resources)', url: 'https://my.rotary.org/en/learning-reference/learn-topic/public-relations' },
            ],
          },
          {
            title: 'Submit to the district newsletter',
            description: 'Email your story to the District 9216 Public Image team. Follow their submission guidelines (format, photo specs, deadlines).',
            resources: [
              { label: 'Rotaract District 9212 Resources', url: 'https://rotaractdistrict9212.org/resources' },
            ],
          },
          {
            title: 'Tag district accounts in major posts',
            description: 'When publishing major content (project launches, milestones), tag @rotaractdistrict9216 and use the hashtag #CreateLastingImpact.',
            resources: [
              { label: 'Social Media Certification (HubSpot Academy)', url: 'https://academy.hubspot.com/courses/social-media' },
            ],
          },
          {
            title: 'Build relationships with other club PR directors',
            description: 'Connect with PR directors from other District 9216 clubs. Cross-promote each other\'s events and share best practices in a WhatsApp group.',
            resources: [
              { label: 'Rotaract District 9216 — official site', url: 'https://www.rotaractdistrict9216.org/' },
            ],
          },
        ],
        resource: {
          label: 'Rotary \u2014 Promote Your Club (official PR resources)',
          url: 'https://my.rotary.org/en/learning-reference/learn-topic/public-relations',
        },
      },
      {
        id: 'q3-sops',
        title: 'Document SOPs for every PR role',
        description:
          'Team expansion step 2. Write simple how-to docs (or record Loom videos) for each recurring task: posting workflow, template usage, newsletter steps, metrics logging. New members become productive in days, not months.',
        timeline: 'Feb 2027',
        hours: '3\u20134 hrs total',
        expansion: true,
        subSteps: [
          {
            title: 'Build an SOP template in Google Docs',
            description: 'Create a step-by-step SOP template with sections for: task name, frequency, tools needed, step-by-step instructions, and screenshots. Save it as a reusable doc.',
            resources: [
              { label: 'Free SOP Template (HubSpot)', url: 'https://www.hubspot.com/resources/templates/sop-template' },
              { label: '12 Free SOP Template Downloads (Scribe)', url: 'https://scribehow.com/library/sop-template' },
            ],
          },
          {
            title: 'Document the weekly posting workflow',
            description: 'Write the complete workflow: Monday plan, Tuesday design in Canva, Wednesday schedule via Meta Business Suite, Thursday engage with comments, Friday review metrics.',
            resources: [
              { label: 'The 15-Minute Social Media Audit (Buffer)', url: 'https://buffer.com/resources/social-media-templates/' },
            ],
          },
          {
            title: 'Document template usage and brand guidelines',
            description: 'Create a quick guide showing how to use the Canva Brand Kit, where to find templates, and which colours/fonts to use.',
            resources: [
              { label: 'Implementing Canva for Brand Designers', url: 'https://www.canva.com/design-school/courses/building-brand-systems-in-canva' },
            ],
          },
          {
            title: 'Store credentials in a password manager',
            description: 'Set up a free password manager (e.g. Bitwarden) and store all social media and tool credentials securely. Share access with your successor when the time comes.',
            resources: [
              { label: 'Knowledge Transfer SOP Template (Scribe)', url: 'https://scribehow.com/library/sop-template' },
            ],
          },
        ],
        resource: {
          label: 'Notion \u2014 How to Build a Team Wiki / SOPs',
          url: 'https://www.notion.com/help/guides/how-to-build-a-wiki-for-your-company',
        },
      },
      {
        id: 'q3-committee',
        title: 'Fill 2\u20133 sub-committee roles',
        description:
          'Team expansion step 3. Using your SOPs, onboard a Social Media Manager, Graphics Designer, and/or Editor from club members. Hand each one owned, recurring work \u2014 you shift from doing to directing.',
        timeline: 'Mar 2027',
        hours: '2\u20133 hrs',
        expansion: true,
        subSteps: [
          {
            title: 'Identify the roles you need to fill',
            description: 'Based on your SOPs, decide which roles to delegate first: Social Media Manager (scheduling/posting), Graphics Designer (Canva templates), or Editor (proofreading/captions).',
            resources: [
              { label: 'Rotaract Handbook — club committees', url: 'https://my.rotary.org/en/document/rotaract-handbook' },
            ],
          },
          {
            title: 'Recruit from inside the club',
            description: 'Announce the open PR sub-committee roles at a club meeting. Use a Google Form to collect interest and availability. Prioritise members already active on social media.',
            resources: [
              { label: 'Develop a Social Media Strategy (HubSpot Academy)', url: 'https://academy.hubspot.com/courses/social-media' },
            ],
          },
          {
            title: 'Onboard each person with their SOP',
            description: 'Give each new committee member their specific SOP. Walk through it together in a 30-minute session. Provide access to the relevant Canva templates and tools.',
            resources: [
              { label: 'Knowledge Transfer SOP Template (Scribe)', url: 'https://scribehow.com/library/sop-template' },
            ],
          },
          {
            title: 'Shift from doing to directing',
            description: 'Set a 2-week handover period where you review their work, then step back. Schedule a weekly 15-minute check-in to answer questions.',
            resources: [
              { label: 'Content Marketing Certification (HubSpot Academy)', url: 'https://academy.hubspot.com/courses/content-marketing' },
            ],
          },
        ],
        resource: {
          label: 'Rotaract Handbook \u2014 club committees (official guide)',
          url: 'https://my.rotary.org/en/document/rotaract-handbook',
        },
      },
    ],
  },
  {
    id: 'q4',
    label: 'Q4',
    period: 'April \u2013 June 2027',
    theme: 'Prove it: report the results and hand over a working system',
    tasks: [
      {
        id: 'q4-metrics',
        title: 'Compile the full-year metrics',
        description:
          'Pull your monthly metrics sheet together: follower growth vs the 1,800 target, posting consistency, newsletter stats, district features, and events documented within 48 hrs.',
        timeline: 'Apr 2027',
        hours: '2\u20133 hrs',
        subSteps: [
          {
            title: 'Gather monthly data from all platforms',
            description: 'Pull follower counts, engagement rates, reach, and top-performing posts from Instagram, Facebook, LinkedIn, and TikTok for each month.',
            resources: [
              { label: 'The 15-Minute Social Media Audit (Buffer)', url: 'https://buffer.com/resources/social-media-templates/' },
            ],
          },
          {
            title: 'Calculate follower growth vs your 1,800 target',
            description: 'Plot monthly follower totals against your goal. Calculate percentage growth and identify which months had the biggest jumps.',
            resources: [
              { label: 'Buffer — Social Media Metrics That Matter', url: 'https://buffer.com/library/social-media-metrics/' },
            ],
          },
          {
            title: 'Compile newsletter and district feature stats',
            description: 'Count newsletter issues sent, open rates, new subscribers, and how many club stories were featured by District 9216.',
            resources: [
              { label: 'How to Create a Social Media Report (Hootsuite)', url: 'https://blog.hootsuite.com/social-media-report/' },
            ],
          },
          {
            title: 'Create a one-page summary sheet',
            description: 'Condense all metrics into a single sheet with the most important numbers: follower growth, posting consistency %, newsletter stats, and events documented within 48 hrs.',
            resources: [
              { label: 'Measuring Your Social Return on Investment (HubSpot Academy)', url: 'https://academy.hubspot.com/courses/analytics' },
            ],
          },
        ],
        resource: {
          label: 'Buffer \u2014 Social Media Metrics That Matter',
          url: 'https://buffer.com/library/social-media-metrics/',
        },
      },
      {
        id: 'q4-report',
        title: 'Design the Year-End PR Report',
        description:
          'A visual report in Canva: goals vs results, best-performing content, budget spent vs the ETB 19,000\u201330,500 estimate, and recommendations for 2027/28. Present it to the board and share highlights with the district.',
        timeline: 'May 2027',
        hours: '4\u20135 hrs',
        subSteps: [
          {
            title: 'Outline the report structure',
            description: 'Plan sections: Executive Summary, Goals vs Results, Best-Performing Content, Budget vs Actual (ETB 19,000\u201330,500), and Recommendations for 2027/28.',
            resources: [
              { label: 'Canva — Free Report Templates', url: 'https://www.canva.com/reports/templates/' },
            ],
          },
          {
            title: 'Design the report in Canva',
            description: 'Use Canva\'s report templates. Apply your Brand Kit colours and fonts. Include charts, screenshots of top posts, and before/after metrics.',
            resources: [
              { label: 'Designing Brand Templates (Canva Design School)', url: 'https://www.canva.com/design-school/courses/building-brand-systems-in-canva' },
            ],
          },
          {
            title: 'Write recommendations for the next PR chair',
            description: 'Based on this year\'s data, write 3-5 actionable recommendations: what worked, what to stop, and what to try next year.',
            resources: [
              { label: 'Content Marketing Certification (HubSpot Academy)', url: 'https://academy.hubspot.com/courses/content-marketing' },
            ],
          },
          {
            title: 'Present to the board and share with the district',
            description: 'Present the report at a board meeting. Share a PDF highlight version with District 9216 PR team.',
            resources: [
              { label: 'Rotary — Promote Your Club (PR resources)', url: 'https://my.rotary.org/en/learning-reference/learn-topic/public-relations' },
            ],
          },
        ],
        resource: {
          label: 'Canva \u2014 Free Report Templates',
          url: 'https://www.canva.com/reports/templates/',
        },
      },
      {
        id: 'q4-handover',
        title: 'Prepare the handover pack + train your successor',
        description:
          'Your PR HQ drive, SOPs, brand kit, passwords doc, and metrics sheet ARE the handover pack \u2014 that\u2019s why you built them. Walk your successor (or committee) through everything in 1\u20132 sessions.',
        timeline: 'Jun 1 \u2013 20, 2027',
        hours: '3\u20134 hrs',
        expansion: true,
        subSteps: [
          {
            title: 'Write the handover document',
            description: 'Compile brand rules, template links, content guidelines, and a year-in-review into a single handover document.',
            resources: [
              { label: 'Knowledge Transfer SOP Template (Scribe)', url: 'https://scribehow.com/library/sop-template' },
              { label: 'Standard Operating Procedure Template (HubSpot)', url: 'https://www.hubspot.com/resources/templates/sop-template' },
            ],
          },
          {
            title: 'Organise the shared Google Drive',
            description: 'Clean up the PR HQ drive: sort folders clearly by project and year. Remove drafts and old files. Rename everything for clarity.',
            resources: [
              { label: 'Implementing Canva for Brand Designers', url: 'https://www.canva.com/design-school/courses/building-brand-systems-in-canva' },
            ],
          },
          {
            title: 'Host a walk-through session',
            description: 'Schedule 1-2 sessions with your successor. Walk them through the SOPs, brand kit, calendar, and password manager. Let them practice one full posting cycle.',
            resources: [
              { label: 'Rotary — Club Leadership Succession Planning', url: 'https://my.rotary.org/en/learning-reference/learn-role/club-roles' },
            ],
          },
          {
            title: 'Securely transfer credentials',
            description: 'Share password manager access with your successor. Ensure they can log into every tool: Canva, Meta Business Suite, Mailchimp, Buffer, Google Drive.',
            resources: [
              { label: 'Knowledge Transfer SOP Template (Scribe)', url: 'https://scribehow.com/library/sop-template' },
            ],
          },
        ],
        resource: {
          label: 'Rotary \u2014 Club Leadership Succession Planning',
          url: 'https://my.rotary.org/en/learning-reference/learn-role/club-roles',
        },
      },
      {
        id: 'q4-review',
        title: 'Publish the year-in-review post',
        description:
          'Close the year publicly: a carousel or reel of the year\u2019s best moments, thank-yous to members and partners, and a teaser for 2027/28. End on a high note.',
        timeline: 'Jun 2027',
        hours: '2 hrs',
        subSteps: [
          {
            title: 'Select the year\'s best photos and moments',
            description: 'Go through your PR HQ drive and pick 8-10 moments that represent the year: projects, events, member spotlights, and milestones.',
            resources: [
              { label: 'Later — Instagram Carousel Best Practices', url: 'https://later.com/blog/instagram-carousel/' },
            ],
          },
          {
            title: 'Create a carousel or reel',
            description: 'Design a carousel in Canva (one moment per slide with a short caption) or edit a 60-second reel in CapCut with music and text overlays.',
            resources: [
              { label: 'CapCut Tutorial for Beginners', url: 'https://www.capcut.com/resource/capcut-tutorial-for-beginners' },
            ],
          },
          {
            title: 'Write a caption that closes the year',
            description: 'Thank members and partners, highlight top achievements, include your top 3 stats, and tease what\'s coming in 2027/28.',
            resources: [
              { label: 'How to Write Ad Copy (HubSpot Academy)', url: 'https://academy.hubspot.com/lessons/ad-copy-creative-conversion' },
            ],
          },
          {
            title: 'Publish and share across all channels',
            description: 'Post on Instagram, Facebook, LinkedIn, and TikTok. Share the post in club WhatsApp groups and tag the district.',
            resources: [
              { label: 'Social Media Certification (HubSpot Academy)', url: 'https://academy.hubspot.com/courses/social-media' },
            ],
          },
        ],
        resource: {
          label: 'Later \u2014 Instagram Carousel Best Practices',
          url: 'https://later.com/blog/instagram-carousel/',
        },
      },
    ],
  },
]

export const ALL_TASKS_COUNT = QUARTERS.reduce((sum, q) => sum + q.tasks.length, 0)
