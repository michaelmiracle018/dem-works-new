export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  featured: boolean;
  image?: string;
}

// Import blog images
import pauseBeforePost from '~/assets/blog-pause-before-post.png';
import cyberAwarenessMonth from '~/assets/blog-cyber-awareness-month.png';
import verifyShare from '~/assets/blog-verify-share.png';
import cyberAwareness from '~/assets/blog-cyber-awareness.png';
import passwordSafety from '~/assets/blog-password-safety.png';
import phishing from '~/assets/blog-phishing.png';
import cyberbullying from '~/assets/blog-cyberbullying.png';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'digital-safety-for-teens',
    title: "Understanding Digital Safety for Teens: A Parent's Guide",
    excerpt:
      'Essential tips for parents and educators to help young people navigate the digital world safely. Learn about the latest threats and how to protect your children online.',
    content: `
## Why Digital Safety Matters

In today's connected world, children and teenagers are more exposed to online risks than ever before. From cyberbullying to online predators, the digital landscape presents unique challenges that parents must understand and address.

### Key Threats to Be Aware Of

1. **Cyberbullying** - Harassment, threats, or embarrassment delivered via digital devices
2. **Online Predators** - Adults who use the internet to exploit children
3. **Phishing Scams** - Fraudulent attempts to obtain sensitive information
4. **Identity Theft** - Stealing personal information for fraudulent purposes
5. **Inappropriate Content** - Exposure to violent, sexual, or harmful material

### Practical Steps for Parents

**Open Communication**
Maintain regular conversations with your children about their online activities. Create a safe space where they feel comfortable sharing their experiences without fear of punishment.

**Set Clear Boundaries**
Establish rules about screen time, app downloads, and online interactions. Use parental controls when appropriate, but remember that education is more effective than restriction alone.

**Stay Informed**
Keep up with the latest apps, games, and social platforms your children use. Understanding these tools helps you identify potential risks and have meaningful conversations.

**Lead by Example**
Model good digital citizenship. Your children learn from watching your online behavior, so demonstrate responsible and respectful internet use.

### Warning Signs to Watch For

- Sudden changes in device usage patterns
- Secretive behavior about online activities
- Emotional reactions to notifications or messages
- Unexplained new contacts or friends
- Withdrawal from family and friends

### Resources for Further Learning

At Demworks, we offer comprehensive cybersecurity awareness programs designed specifically for families. Our workshops cover practical strategies for keeping your children safe online while fostering healthy digital habits.

Contact us today to learn more about our upcoming parent education sessions.
    `,
    date: 'Jan 25, 2026',
    author: 'Emmanuel Adeyemi',
    category: 'Cybersecurity',
    readTime: '5 min read',
    featured: true,
    image: cyberAwareness,
  },
  {
    id: 2,
    slug: 'breaking-the-stigma-addiction',
    title: 'Breaking the Stigma: Conversations About Addiction',
    excerpt:
      'How open dialogue can transform our approach to substance abuse recovery. Understanding addiction as a health issue, not a moral failing.',
    content: `
## Reframing Our Understanding of Addiction

Addiction is one of the most misunderstood health conditions in our society. For too long, we've treated substance abuse as a moral failing rather than a complex health issue requiring compassion and proper treatment.

### The Science of Addiction

Modern neuroscience has revolutionized our understanding of addiction. We now know that:

- **Addiction affects brain chemistry** - Substances alter the brain's reward system, making recovery a biological as well as psychological challenge
- **Genetics play a role** - Some individuals are more predisposed to addiction than others
- **Environmental factors matter** - Trauma, stress, and social conditions significantly impact addiction risk

### Why Stigma is Harmful

When we stigmatize addiction, we:

1. **Discourage help-seeking** - People avoid treatment for fear of judgment
2. **Damage relationships** - Families struggle to provide support without understanding
3. **Perpetuate cycles** - Shame and isolation often worsen substance abuse
4. **Limit resources** - Stigma affects funding and policy decisions

### Starting the Conversation

**Use Person-First Language**
Say "person with addiction" rather than "addict." This simple change acknowledges humanity before condition.

**Listen Without Judgment**
When someone shares their struggles, focus on understanding rather than offering solutions or criticism.

**Educate Yourself**
Learn about addiction from reputable sources. Understanding the condition helps you respond with empathy.

**Share Stories of Recovery**
Normalize recovery by celebrating success stories. This offers hope and reduces shame.

### Our Community Approach

At Demworks, we believe that community support is essential to recovery. Our programs focus on:

- Education and awareness
- Family support services
- Peer counseling networks
- Resource connection and navigation

Together, we can create communities where people feel safe seeking help and supported in their recovery journey.
    `,
    date: 'Jan 20, 2026',
    author: 'Dr. Amara Okonkwo',
    category: 'Drug Awareness',
    readTime: '7 min read',
    featured: true,
    image: cyberbullying,
  },
  {
    id: 3,
    slug: 'pause-before-you-post',
    title: 'Pause Before You Post: Protecting Your Digital Privacy',
    excerpt:
      'What you post online stays online forever. Learn how to think before you share personal info or photos to guard your privacy.',
    content: `
## What You Post Online Stays Online — Forever

In the age of social media, it's easy to share moments from our lives without thinking about the long-term consequences. But what you post online can have lasting effects on your privacy, reputation, and security.

### Key Privacy Tips

**Think Before You Share Personal Info or Photos**
Every piece of personal information you share online can be collected, stored, and potentially misused. Before posting, ask yourself: "Would I be comfortable if this was seen by everyone?"

**Review Privacy Settings Regularly**
Social media platforms frequently update their privacy policies and settings. Make it a habit to review and adjust your privacy settings at least once a month.

**Not Everyone Deserves Access to Your Life**
Be selective about who you connect with online. Not every friend request needs to be accepted, and not every follower needs access to your personal moments.

### The Permanence of Digital Content

Once something is posted online, it can be:
- Screenshotted and shared without your knowledge
- Cached by search engines
- Accessed by future employers, schools, or relationships
- Used against you in unexpected ways

### Your Privacy is Power — Guard It

At Demworks, we teach practical digital privacy skills through our #CyberSmartWithDemworks campaign. Our workshops help young people and adults understand the value of their personal information and how to protect it.

Remember: Your privacy is power. Guard it carefully.
    `,
    date: 'Jan 18, 2026',
    author: 'Emmanuel Adeyemi',
    category: 'Cybersecurity',
    readTime: '4 min read',
    featured: true,
    image: pauseBeforePost,
  },
  {
    id: 4,
    slug: 'cybersecurity-awareness-month',
    title: 'Cybersecurity Awareness Month: Think Before You Click',
    excerpt:
      'Join us this October as we explore practical ways to stay cyber smart, secure, and aware.',
    content: `
## October is Cybersecurity Awareness Month

Join us as we share smart digital safety tips all month long! This October, Demworks is dedicated to helping you and your community stay cyber smart, secure, and aware.

### Why Cybersecurity Awareness Matters

In our increasingly digital world, cyber threats are evolving rapidly. From phishing attacks to ransomware, the dangers are real and can affect anyone. That's why education and awareness are our first lines of defense.

### Our October Initiatives

**Weekly Safety Tips**
Follow our social media channels for weekly cybersecurity tips that you can implement immediately.

**Community Workshops**
Join our free community workshops covering topics from password security to recognizing scams.

**School Programs**
We're visiting schools across the region to teach students about online safety.

### Think Before You Click

The theme for this year is "Think Before You Click." This simple principle can prevent most cyber attacks:

- Don't click on suspicious links
- Verify the sender before responding to emails
- Be cautious with downloads from unknown sources
- Report suspicious activity to the appropriate authorities

### Empowering Minds for a Safer Digital Future

Together, we can build a community that's resilient against cyber threats. Protect your data. Protect your future.

#CyberSmartWithDemworks #ThinkBeforeYouClick
    `,
    date: 'Jan 15, 2026',
    author: 'Fatima Hassan',
    category: 'Events',
    readTime: '4 min read',
    featured: false,
    image: cyberAwarenessMonth,
  },
  {
    id: 5,
    slug: 'think-verify-share-responsibly',
    title: 'Think. Verify. Share Responsibly.',
    excerpt:
      'Fake news spreads faster than the truth. Learn how to verify information before sharing and become a responsible digital citizen.',
    content: `
## Fake News Spreads Faster Than the Truth

In today's information age, misinformation can spread like wildfire. As responsible digital citizens, we have a duty to verify information before amplifying it.

### How to Verify Information

**Check the Source**
Look at where the information is coming from. Is it a reputable news outlet or an unknown website? Check the "About" page and look for contact information.

**Check Credible Sources**
Cross-reference information with established, credible sources. If a story seems too sensational, it probably needs verification.

**Don't Forward Messages You Can't Confirm**
Before hitting that share or forward button, ask yourself: "Have I verified this information?" If not, don't share it.

### Why This Matters

Misinformation can:
- Damage reputations unfairly
- Cause public panic
- Influence elections and public opinion
- Lead to real-world harm

### Smart Youth Verify Before They Amplify

At Demworks, we're teaching young people to be critical consumers of information. Our media literacy programs help students:

- Identify fake news and misinformation
- Understand the importance of source verification
- Become responsible sharers of information
- Contribute positively to online discourse

Join our #ThinkBeforeYouClick campaign and help us build a more informed society.
    `,
    date: 'Jan 12, 2026',
    author: 'Emmanuel Adeyemi',
    category: 'Cybersecurity',
    readTime: '5 min read',
    featured: false,
    image: verifyShare,
  },
  {
    id: 6,
    slug: 'password-safety-guide',
    title: 'Your Password is Your Key — Keep It Safe!',
    excerpt:
      'A strong password is your first defense against hackers. Learn how to create and manage secure passwords.',
    content: `
## A Strong Password is Your First Defense Against Hackers

Your password is the key to your digital life. Weak passwords are like leaving your front door unlocked — an open invitation for intruders.

### Password Best Practices

**Use at Least 8 Characters**
The longer your password, the harder it is to crack. Aim for at least 8 characters, but 12 or more is even better.

**Mix Letters, Numbers, and Symbols**
Combine uppercase and lowercase letters, numbers, and special characters (~, #, $, %, etc.) to create a stronger password.

**Never Share It With Anyone**
Your password is personal. Never share it with friends, family, or anyone claiming to be from tech support.

**Turn on Two-Factor Authentication (2FA)**
Add an extra layer of security by enabling 2FA wherever possible. This requires a second form of verification beyond just your password.

### Common Password Mistakes to Avoid

- Using personal information (birthdays, names, etc.)
- Using the same password for multiple accounts
- Writing passwords on sticky notes near your computer
- Using dictionary words or common phrases

### Protect Your Digital Door

At Demworks, we teach practical password security in all our cybersecurity workshops. Remember: Protect your digital door before someone walks in.

#CyberSmartWithDemworks #PasswordSecurity
    `,
    date: 'Jan 8, 2026',
    author: 'David Mensah',
    category: 'Cybersecurity',
    readTime: '4 min read',
    featured: false,
    image: passwordSafety,
  },
  {
    id: 7,
    slug: 'dont-take-the-bait',
    title: "Don't Take the Bait! Recognizing Phishing Scams",
    excerpt:
      'Scammers use fake links, pages, and messages to steal your data. Learn how to recognize and avoid phishing attempts.',
    content: `
## Scammers Use Fake Links, Pages, and Messages to Steal Your Data

Phishing is one of the most common cyber attacks, and it's getting more sophisticated every day. Criminals create convincing fake websites, emails, and messages to trick you into revealing sensitive information.

### How to Spot Phishing Attempts

**Don't Click Unknown Links**
If you receive a link from an unknown sender, or even from a known sender but it seems unusual, don't click it. Hover over links to see the actual URL before clicking.

**Verify the Sender Before Replying**
Scammers often impersonate legitimate organizations or people you know. Always verify the sender through a separate channel before responding to suspicious requests.

**No Bank Will Ask for Your PIN Online**
Legitimate financial institutions will never ask for your PIN, password, or complete account details via email or text message.

### Red Flags to Watch For

- Urgent or threatening language
- Spelling and grammar mistakes
- Generic greetings ("Dear Customer")
- Mismatched URLs or email addresses
- Requests for personal or financial information

### If It Looks Too Good to Be True, It Probably Is

Promises of lottery winnings, unexpected inheritances, or too-good-to-be-true deals are almost always scams. Trust your instincts and verify before you act.

At Demworks, we provide training on recognizing and avoiding phishing attacks. Stay informed, stay safe.

#CyberSmartWithDemworks #AntiPhishing
    `,
    date: 'Jan 5, 2026',
    author: 'Emmanuel Adeyemi',
    category: 'Cybersecurity',
    readTime: '5 min read',
    featured: false,
    image: phishing,
  },
  {
    id: 8,
    slug: 'words-can-wound-be-kind-online',
    title: 'Words Can Wound — Be Kind Online',
    excerpt:
      'Cyberbullying hurts. Learn how you can be the change and create a kinder online environment.',
    content: `
## Cyberbullying Hurts. You Can Be the Change.

The words we type have real impact on real people. Cyberbullying can cause lasting emotional and psychological harm. But together, we can create a kinder online world.

### How to Combat Cyberbullying

**Don't Engage or Retaliate**
If you're being bullied online, responding in anger can escalate the situation. Take a step back and don't engage.

**Report Bullies and Support Victims**
Use platform reporting features to flag bullying behavior. Reach out to victims to offer support and let them know they're not alone.

**Use Your Voice to Uplift, Not Destroy**
Every comment, every post, every message is an opportunity to spread positivity or negativity. Choose to uplift others.

### Signs of Cyberbullying

- Repeated negative messages or comments
- Sharing embarrassing photos or information
- Exclusion from online groups or activities
- Creating fake profiles to harass someone
- Spreading rumors or lies online

### Empowered Minds Lift Others Up

At Demworks, we believe in the power of kindness. Our anti-cyberbullying programs teach young people to be empathetic digital citizens who stand up for others.

Remember: Behind every screen is a real person with real feelings. Let's use our digital presence to make the world a better place.

#CyberSmartWithDemworks #BeKindOnline
    `,
    date: 'Jan 2, 2026',
    author: 'Dr. Amara Okonkwo',
    category: 'Cybersecurity',
    readTime: '5 min read',
    featured: false,
    image: cyberbullying,
  },
  {
    id: 9,
    slug: 'building-resilient-communities',
    title: 'Building Resilient Communities Through Education',
    excerpt:
      'How our community programs are creating lasting change and empowering individuals to become advocates for safety.',
    content: `
## The Power of Community Education

At Demworks, we believe that lasting change happens when communities are empowered with knowledge. Our education programs don't just inform—they transform participants into advocates who carry the message forward.

### Our Educational Philosophy

**Accessible Learning**
We design programs that meet people where they are, using:
- Plain language explanations
- Culturally relevant examples
- Multiple learning formats
- Community-based delivery

**Practical Application**
Knowledge without action is incomplete. Our programs emphasize:
- Hands-on exercises
- Real-world scenarios
- Take-home resources
- Follow-up support

**Multiplier Effect**
We train participants to become educators themselves, expanding our reach exponentially.

### Program Impact

**By the Numbers**
- 50,000+ individuals educated
- 200+ community workshops delivered
- 85% of participants report behavior change
- 60% go on to educate others

**Community Stories**
Our programs have:
- Helped families recognize and address substance abuse early
- Protected seniors from online scams
- Empowered youth with digital literacy skills
- Strengthened community networks of support

### The Ripple Effect

When one person learns, they share with family. Family shares with neighbors. Neighbors share with community. This ripple effect multiplies our impact far beyond what statistics can capture.

### Get Involved

**Host a Workshop**
Bring our programs to your community, school, or organization.

**Become a Volunteer Educator**
Complete our training program and help us reach more people.

**Support Our Mission**
Your donations help us develop new programs and reach underserved communities.

Together, we're building communities that protect and support each other.
    `,
    date: 'Dec 28, 2025',
    author: 'Dr. Amara Okonkwo',
    category: 'Community',
    readTime: '8 min read',
    featured: false,
  },
];

export const categories = [
  'All',
  'Cybersecurity',
  'Drug Awareness',
  'Events',
  'Community',
  'Resources',
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentPost: BlogPost, limit = 3): BlogPost[] {
  return blogPosts
    .filter((post) => post.id !== currentPost.id && post.category === currentPost.category)
    .slice(0, limit);
}
