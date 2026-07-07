export type Task = {
  id: string
  title: string
  description: string
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
        resource: {
          label: 'Later \u2014 Instagram Carousel Best Practices',
          url: 'https://later.com/blog/instagram-carousel/',
        },
      },
    ],
  },
]

export const ALL_TASKS_COUNT = QUARTERS.reduce((sum, q) => sum + q.tasks.length, 0)
