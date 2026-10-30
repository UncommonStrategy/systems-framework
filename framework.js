(function () {
  function initFramework() {
    const dataSet = {
      security: {
        badge: "Outer Ring: Security Layer",
        title: "Security Layer",
        desc: "Security protects your client details, finances, messages, and files. It keeps your business safe without getting in the way of daily work.",
        strat: "Making sure passwords are stored safely, two-step login is turned on, and your team knows how to spot common cyber risks.",
        accent: "#00b894",
        badgeBg: "rgba(0, 184, 148, 0.12)",
        badgeBorder: "rgba(0, 184, 148, 0.4)",
        textColor: "#065f46"
      },
      analytics: {
        badge: "Middle Ring: Data Analytics",
        title: "Data Analytics",
        desc: "Analytics shows you what’s actually working. By tracking key numbers across your business, you can make clear, confident decisions.",
        strat: "Setting up simple, clear dashboards so you can see sales, expenses, and team progress in one glance.",
        accent: "#1863DC",
        badgeBg: "rgba(24, 99, 220, 0.1)",
        badgeBorder: "rgba(24, 99, 220, 0.35)",
        textColor: "#1e40af"
      },
      integration: {
        badge: "Inner Ring: System Integration",
        title: "System Integration",
        desc: "System Integration gets your software talking to each other so you and your team don't waste time on manual data re-entry.",
        strat: "Connecting your key software tools so information moves smoothly between departments automatically.",
        accent: "#864871",
        badgeBg: "rgba(134, 72, 113, 0.12)",
        badgeBorder: "rgba(134, 72, 113, 0.35)",
        textColor: "#581c87"
      },
      comm: {
        badge: "System Circle 01: Communication",
        title: "Communication & Collaboration",
        desc: "Clear ways for your team and clients to talk, so important messages don't get lost across too many apps.",
        strat: "Setting clean boundaries on which apps to use, and creating handy message templates for client replies.",
        accent: "#CC3366",
        badgeBg: "rgba(204, 51, 102, 0.12)",
        badgeBorder: "rgba(204, 51, 102, 0.35)",
        textColor: "#9f1239"
      },
      ops: {
        badge: "System Circle 02: Operations",
        title: "Operations Management",
        desc: "Smooth daily workflows and step-by-step guides so work gets done right and on time without constant oversight.",
        strat: "Turning messy tasks into simple checklists, tracking project goals, and automating repetitive steps.",
        accent: "#864871",
        badgeBg: "rgba(134, 72, 113, 0.12)",
        badgeBorder: "rgba(134, 72, 113, 0.35)",
        textColor: "#701a75"
      },
      finance: {
        badge: "System Circle 03: Financials",
        title: "Financial Management",
        desc: "Simple, reliable tracking for money coming in and going out, so you always know where your business stands.",
        strat: "Automating invoice logging, tracking expenses, and setting up straightforward cash flow reviews.",
        accent: "#1863DC",
        badgeBg: "rgba(24, 99, 220, 0.12)",
        badgeBorder: "rgba(24, 99, 220, 0.35)",
        textColor: "#1e3a8a"
      },
      customer: {
        badge: "System Circle 04: Customer Mgmt",
        title: "Customer Management",
        desc: "Welcoming onboarding and quick support systems that make working with you a great experience for your clients.",
        strat: "Mapping out smooth client welcome steps, clear support channels, and reliable follow-up schedules.",
        accent: "#293C5B",
        badgeBg: "rgba(41, 60, 91, 0.12)",
        badgeBorder: "rgba(41, 60, 91, 0.35)",
        textColor: "#1e293b"
      },
      marketing: {
        badge: "System Circle 05: Marketing",
        title: "Marketing System",
        desc: "Simple, steady paths for finding new leads and turning them into happy clients.",
        strat: "Creating straightforward content creation routines and simple lead capture steps.",
        accent: "#008000",
        badgeBg: "rgba(0, 128, 0, 0.12)",
        badgeBorder: "rgba(0, 128, 0, 0.35)",
        textColor: "#14532d"
      },
      human: {
        badge: "Core Confluence: Human Capital",
        title: "Human Capital",
        desc: "The real heart of your business. Technology should always be built around people to make their work easier and more enjoyable.",
        strat: "Giving your team clear role expectations, practical training, and tools they actually enjoy using.",
        accent: "#00b894",
        badgeBg: "rgba(0, 184, 148, 0.12)",
        badgeBorder: "rgba(0, 184, 148, 0.4)",
        textColor: "#065f46"
      }
    };

    function selectItem(key) {
      document.querySelectorAll('.ml-framework .orbit-ring, .ml-framework .venn-ring, .ml-framework .ring-center').forEach(function(el) {
        el.classList.remove('active-ring');
      });

      const target = document.getElementById('target-' + key);
      if (target) target.classList.add('active-ring');

      const item = dataSet[key];
      if (!item) return;

      const badgeEl = document.getElementById('card-badge');
      if (badgeEl) {
        badgeEl.textContent = item.badge;
        badgeEl.style.color = item.textColor;
        badgeEl.style.borderColor = item.badgeBorder;
        badgeEl.style.backgroundColor = item.badgeBg;
      }

      const titleEl = document.getElementById('card-title');
      if (titleEl) titleEl.textContent = item.title;

      const descEl = document.getElementById('card-desc');
      if (descEl) descEl.textContent = item.desc;

      const stratEl = document.getElementById('card-strat');
      if (stratEl) stratEl.textContent = item.strat;

      const labelStrat = document.getElementById('card-label-strat');
      if (labelStrat) labelStrat.style.color = item.accent;
    }

    // Attach click listeners to all clickable elements
    document.querySelectorAll('.ml-framework [data-select]').forEach(function(el) {
      el.addEventListener('click', function() {
        selectItem(this.getAttribute('data-select'));
      });
    });

    // Default select
    selectItem('security');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFramework);
  } else {
    initFramework();
  }
})();
