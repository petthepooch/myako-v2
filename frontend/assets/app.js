const dashboard = document.querySelector('.dashboard');
const template = document.getElementById('dashboard-template');
const app = document.querySelector('.app');
const themeToggle = document.querySelector('.theme-toggle');

const learnerState = {
  streak: '12 days',
  weeklyHours: '8.5 hrs',
  skills: '3 new',
  completion: 64,
  modules: [
    {
      title: 'Machine Learning Foundations',
      lessons: 18,
      completion: 72,
      tag: 'In progress',
    },
    {
      title: 'Data Visualization with D3.js',
      lessons: 12,
      completion: 44,
      tag: 'Next up',
    },
    {
      title: 'Storytelling for Analysts',
      lessons: 6,
      completion: 20,
      tag: 'Preview',
    },
  ],
  goals: [
    {
      title: 'Finish ML quiz',
      due: 'Today · 2:00 PM',
      focus: 'Knowledge check on supervised learning',
    },
    {
      title: 'Practice dataset exploration',
      due: '45 min',
      focus: 'Complete guided notebook 2.3',
    },
  ],
  tasks: [
    {
      title: 'Team retrospective post',
      meta: 'Community · due tomorrow',
      priority: 'High',
    },
    {
      title: 'Capstone milestone review',
      meta: 'Mentor feedback · Friday',
      priority: 'Medium',
    },
    {
      title: 'Upload reflection log',
      meta: 'Portfolio · Sunday',
      priority: 'Low',
    },
  ],
  schedule: [
    {
      date: 'Apr 18',
      day: 'Thu',
      time: '13:30',
      title: 'Mentor session with Priya',
      meta: 'Zoom · Agenda shared',
    },
    {
      date: 'Apr 19',
      day: 'Fri',
      time: '10:00',
      title: 'Capstone sprint planning',
      meta: 'Cohort workspace',
    },
  ],
  resources: [
    {
      title: 'Bias & fairness checklist',
      meta: 'Tool · 10 min read',
      action: 'Open',
    },
    {
      title: 'Model evaluation playbook',
      meta: 'Guide · saved yesterday',
      action: 'Continue',
    },
    {
      title: 'Career pathways: Data Scientist',
      meta: 'Playlist · curated for you',
      action: 'Explore',
    },
  ],
  community: [
    {
      name: 'Priya Kapoor',
      role: 'Mentor · AI Researcher',
      status: 'Reply within 4 hrs',
    },
    {
      name: 'Data Science Cohort · Wave 6',
      role: 'Community · 18 active',
      status: 'New thread: Feature engineering tips',
    },
  ],
  achievements: [
    {
      title: 'ML Foundations badge',
      meta: 'Unlocked Apr 9 · 94% mastery',
    },
    {
      title: 'Weekly streak — 4 weeks',
      meta: 'Consistency milestone',
    },
  ],
  insights: [
    {
      title: 'Time of day boost',
      meta: 'You learn faster between 9-11 AM. Plan deep work here.',
    },
    {
      title: 'Peer collaboration',
      meta: 'Learners who post twice a week score 12% higher. Share progress.',
    },
    {
      title: 'Upcoming skill gap',
      meta: 'Focus on feature scaling techniques before the next quiz.',
    },
  ],
};

function renderDashboard(state) {
  if (!template?.content) return;
  const fragment = template.content.cloneNode(true);

  fragment.querySelector('[data-field="streak"]').textContent = state.streak;
  fragment.querySelector('[data-field="weeklyHours"]').textContent = state.weeklyHours;
  fragment.querySelector('[data-field="skills"]').textContent = state.skills;

  const completionCircle = fragment.querySelector('[data-field="completion"]');
  completionCircle.style.setProperty('--progress', state.completion);
  completionCircle.setAttribute('data-label', `${state.completion}%`);

  const moduleList = fragment.querySelector('[data-list="modules"]');
  state.modules.forEach((module) => {
    const moduleCard = document.createElement('article');
    moduleCard.className = 'module-card';
    moduleCard.innerHTML = `
      <div class="module-card__meta">
        <p class="module-card__title">${module.title}</p>
        <p class="module-card__details">${module.lessons} lessons · ${module.tag}</p>
      </div>
      <div class="module-card__progress" role="progressbar" aria-valuenow="${module.completion}" aria-valuemin="0" aria-valuemax="100">
        <div class="module-card__progress-bar" style="width: ${module.completion}%;"></div>
      </div>
    `;
    moduleList.appendChild(moduleCard);
  });

  fillList(fragment, 'goals', state.goals, renderGoalCard);
  fillList(fragment, 'tasks', state.tasks, renderTaskCard);
  fillList(fragment, 'resources', state.resources, renderResourceCard);
  fillList(fragment, 'achievements', state.achievements, renderAchievementCard);
  fillList(fragment, 'insights', state.insights, renderInsightCard);

  const scheduleRoot = fragment.querySelector('[data-list="schedule"]');
  state.schedule.forEach((event) => {
    const calendarCard = document.createElement('article');
    calendarCard.className = 'calendar-card';
    calendarCard.innerHTML = `
      <div class="calendar-card__date">
        <strong>${event.date}</strong>
        <span>${event.day}</span>
      </div>
      <div class="calendar-card__content">
        <p class="card__title">${event.title}</p>
        <p class="calendar-card__meta">${event.meta}</p>
      </div>
      <p class="calendar-card__time">${event.time}</p>
    `;
    scheduleRoot.appendChild(calendarCard);
  });

  const communityRoot = fragment.querySelector('[data-list="community"]');
  state.community.forEach((item) => {
    const communityCard = document.createElement('article');
    communityCard.className = 'community-card';
    communityCard.innerHTML = `
      <div class="community-card__avatar" aria-hidden="true">${item.name
        .split(' ')
        .map((part) => part[0])
        .join('')}</div>
      <div>
        <p class="card__title">${item.name}</p>
        <p class="community-card__meta">${item.role}</p>
      </div>
      <span class="badge">${item.status}</span>
    `;
    communityRoot.appendChild(communityCard);
  });

  dashboard.replaceChildren(fragment);
}

function fillList(root, listName, items, renderer) {
  const list = root.querySelector(`[data-list="${listName}"]`);
  list?.replaceChildren(...items.map(renderer));
}

function renderGoalCard(goal) {
  const card = document.createElement('li');
  card.className = 'goal-card';
  card.innerHTML = `
    <p class="card__title">${goal.title}</p>
    <p class="card__meta">${goal.focus}</p>
    <p class="card__meta"><strong>${goal.due}</strong></p>
  `;
  return card;
}

function renderTaskCard(task) {
  const card = document.createElement('li');
  card.className = 'task-card';
  card.innerHTML = `
    <p class="card__title">${task.title}</p>
    <p class="card__meta">${task.meta}</p>
    <span class="badge">Priority · ${task.priority}</span>
  `;
  return card;
}

function renderResourceCard(resource) {
  const card = document.createElement('li');
  card.className = 'resource-card';
  card.innerHTML = `
    <p class="card__title">${resource.title}</p>
    <p class="card__meta">${resource.meta}</p>
    <button class="text-button" type="button">${resource.action}</button>
  `;
  return card;
}

function renderAchievementCard(achievement) {
  const card = document.createElement('li');
  card.className = 'achievement-card';
  card.innerHTML = `
    <p class="card__title">${achievement.title}</p>
    <p class="card__meta">${achievement.meta}</p>
  `;
  return card;
}

function renderInsightCard(insight) {
  const card = document.createElement('li');
  card.className = 'insight-card';
  card.innerHTML = `
    <p class="card__title">${insight.title}</p>
    <p class="card__meta">${insight.meta}</p>
  `;
  return card;
}

function toggleTheme() {
  const nextTheme = app.dataset.theme === 'light' ? 'dark' : 'light';
  app.dataset.theme = nextTheme;
  themeToggle.querySelector('.theme-toggle__icon').textContent = nextTheme === 'light' ? '🌙' : '☀️';
  themeToggle.querySelector('.theme-toggle__label').textContent =
    nextTheme === 'light' ? 'Dark mode' : 'Light mode';
}

themeToggle.addEventListener('click', toggleTheme);
renderDashboard(learnerState);
