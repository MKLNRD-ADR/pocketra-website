import heroImage from './assets/hero.jpg';
import addMoneyImage from './assets/hero.jpg';
import addSectionImage from './assets/hero.jpg';
import addExpenseImage from './assets/hero.jpg';
import spendHistoryImage from './assets/hero.jpg';

const pockets = [
  { name: 'Savings', amount: 'PHP 18,000', accent: 'var(--color-pocket-green)' },
  { name: 'Phone Case', amount: 'PHP 1,000', accent: 'var(--color-pocket-blue)' },
  { name: 'Allowance', amount: 'PHP 302', accent: 'var(--color-pocket-gold)' },
  { name: 'Bills', amount: 'PHP 9,000', accent: 'var(--color-pocket-purple)' },
];

const stats = [
  { value: 'Unlimited', label: 'pockets per wallet' },
  { value: 'Real-time', label: 'balance updates' },
  { value: 'PHP', label: 'native currency support' },
];

const features = [
  {
    step: '01',
    tag: 'Your wallet',
    title: 'See everything at a glance',
    desc: 'Total money, every pocket, and your most recent spend, all on one screen the moment you open the app.',
    image: heroImage,
    imagePosition: 'center',
    reverse: false,
  },
  {
    step: '02',
    tag: 'Add money',
    title: 'Top up, with context',
    desc: "Add to your total balance and label what it's for, so every peso has a reason, not just a number.",
    image: addMoneyImage,
    imagePosition: 'center',
    reverse: true,
  },
  {
    step: '03',
    tag: 'Create a pocket',
    title: 'Set money aside, without setting it apart',
    desc: 'Name the pocket and set its budget. It stays part of your real balance the whole time.',
    image: addSectionImage,
    imagePosition: 'center',
    reverse: false,
  },
  {
    step: '04',
    tag: 'Log an expense',
    title: 'Record what you spent',
    desc: 'Pick the pocket it came from and log the amount, right when it happens.',
    image: addExpenseImage,
    imagePosition: 'center',
    reverse: true,
  },
  {
    step: '05',
    tag: 'Watch it update',
    title: 'The pocket updates instantly',
    desc: "That pocket's remaining total drops immediately, with a running list of everything logged against it.",
    image: spendHistoryImage,
    imagePosition: 'center',
    reverse: false,
  },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b border-card-border/60">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-6 sm:px-10 py-4">
        <span className="font-display font-bold text-xl">Pocketra</span>
        <div className="hidden sm:flex items-center gap-8 text-sm text-text-soft">
          <a href="#how-it-works" className="hover:text-text transition">How it works</a>
          <a href="#features" className="hover:text-text transition">Features</a>
        </div>
        <a
          href="#download"
          className="inline-flex items-center rounded-full bg-pocket-green px-5 py-2.5 text-sm font-semibold text-[#06140a] hover:opacity-90 transition"
        >
          Download
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="pb-8">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-16 pb-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-pocket-green mb-4">
            Personal finance, reorganized
          </p>
          <h1 className="font-semibold text-4xl sm:text-5xl leading-[1.08] mb-6">
            One balance.<br />As many pockets as you need.
          </h1>
          <p className="text-text-soft text-base sm:text-lg max-w-md mb-8">
            Pocketra lets you divide your money into sections - allowance, savings, bills -
            without ever moving it out of your real balance. Spend from a pocket, and your
            total updates instantly.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#download" className="inline-flex items-center rounded-full bg-pocket-green px-6 py-3 text-sm font-semibold text-[#06140a] hover:opacity-90 transition">
              Get Pocketra
            </a>
            <a href="#how-it-works" className="inline-flex items-center rounded-full border border-card-border px-6 py-3 text-sm font-semibold hover:border-pocket-green transition">
              See how it works
            </a>
          </div>
        </div>
        <div className="flex justify-center relative">
          <div className="absolute w-72 h-72 bg-pocket-green/20 rounded-full blur-3xl -z-10" />
          <div className="w-[280px] rounded-[36px] border border-card-border bg-[#060a06] p-3 shadow-[0_40px_80px_-30px_rgba(61,220,132,0.18)]">
            <img src={heroImage} alt="Pocketra wallet screen" className="rounded-[26px] w-full" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-card-border pt-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="font-mono text-lg text-pocket-green mb-1">{s.value}</p>
              <p className="text-xs text-text-faint">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="max-w-6xl mx-auto px-6 sm:px-10 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-pocket-green mb-4">How sections work</p>
      <h2 className="font-semibold text-3xl sm:text-4xl max-w-2xl mx-auto mb-4">
        Your balance stays whole. Your plans stay separate.
      </h2>
      <p className="text-text-soft max-w-xl mx-auto mb-14">
        Create a pocket for anything - a trip, a bill, pocket money for the week. Pocketra
        reserves the amount without ever pulling it out of your wallet.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
        <div className="rounded-3xl border border-pocket-green bg-card px-8 py-6">
          <p className="text-xs text-text-faint mb-1">Total Balance</p>
          <p className="font-mono text-xl text-pocket-green">PHP 28,302.00</p>
        </div>
        <div className="h-px w-16 bg-gradient-to-r from-pocket-green to-card-border hidden sm:block" />
        <div className="flex flex-wrap gap-4 justify-center">
          {pockets.map((p) => (
            <div
              key={p.name}
              className="text-left rounded-2xl border border-card-border bg-card px-5 py-4 min-w-[130px]"
              style={{ borderTopColor: p.accent, borderTopWidth: '3px' }}
            >
              <p className="text-sm mb-1">{p.name}</p>
              <p className="font-mono text-sm text-text-soft">{p.amount}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
        <div className="rounded-3xl border border-card-border bg-bg-soft p-7">
          <h3 className="font-semibold text-lg mb-2">Create a pocket</h3>
          <p className="text-text-soft text-sm">
            Name it, set a budget, pick a color. It lives inside your existing balance, not separate from it.
          </p>
        </div>
        <div className="rounded-3xl border border-card-border bg-bg-soft p-7">
          <h3 className="font-semibold text-lg mb-2">Spend from it</h3>
          <p className="text-text-soft text-sm">
            Log an expense against that pocket. Your remaining balance and the pocket's total update together, in real time.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeatureShowcase({ step, tag, title, desc, image, imagePosition, reverse }) {
  return (
    <div className="grid sm:grid-cols-2 gap-10 items-center py-14 border-b border-card-border">
      <div className={reverse ? 'sm:order-2' : ''}>
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-text-faint">{step}</span>
          <p className="font-mono text-xs uppercase tracking-widest text-pocket-green">{tag}</p>
        </div>
        <h3 className="font-semibold text-2xl mb-3">{title}</h3>
        <p className="text-text-soft">{desc}</p>
      </div>
      <div className={reverse ? 'sm:order-1' : ''}>
        <div className="w-[230px] mx-auto rounded-[30px] border border-card-border bg-[#060a06] p-2.5 shadow-[0_30px_60px_-25px_rgba(61,220,132,0.15)] transition-transform hover:-translate-y-1">
          <div className="rounded-[22px] overflow-hidden h-[400px]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              style={{ objectPosition: imagePosition }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="max-w-5xl mx-auto px-6 sm:px-10 py-24">
      <div className="text-center mb-4 max-w-xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-pocket-green mb-4">How it actually works</p>
        <h2 className="font-semibold text-3xl sm:text-4xl">From wallet to pocket, in five steps</h2>
      </div>
      <div>
        {features.map((f) => (
          <FeatureShowcase key={f.step} {...f} />
        ))}
      </div>
    </section>
  );
}

function Download() {
  return (
    <section id="download" className="px-6 sm:px-10 py-16 pb-24">
      <div className="max-w-xl mx-auto rounded-[28px] border border-card-border bg-card text-center p-10">
        <div className="w-14 h-14 rounded-2xl bg-pocket-green text-[#06140a] font-display font-bold text-xl flex items-center justify-center mx-auto mb-6">
          P
        </div>
        <h2 className="font-semibold text-3xl mb-3">Get Pocketra</h2>
        <p className="text-text-soft mb-8">Start splitting your balance into pockets today. Free to use.</p>
        <div className="flex flex-wrap gap-4 justify-center mb-5">
          <a href="#" className="flex flex-col items-start rounded-2xl border border-card-border bg-bg-soft px-6 py-3 min-w-[160px] hover:border-pocket-green transition">
            <span className="text-[11px] text-text-faint">Download for</span>
            <span className="font-semibold text-lg">Android</span>
          </a>
          <a href="#" className="flex flex-col items-start rounded-2xl border border-card-border bg-bg-soft px-6 py-3 min-w-[160px] opacity-55 pointer-events-none">
            <span className="text-[11px] text-text-faint">Coming soon to</span>
            <span className="font-semibold text-lg">iOS</span>
          </a>
        </div>
        <p className="text-xs text-text-faint">Update these links once your APK or Play Store listing is live.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 sm:px-10 py-10 border-t border-card-border flex flex-wrap items-center justify-between gap-4 text-text-faint text-sm">
      <span className="font-semibold text-text">Pocketra</span>
      <p>Copyright 2026 Pocketra. Built for people who think in pockets, not spreadsheets.</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
