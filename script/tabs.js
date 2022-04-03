const onTabClick = (event) => {
  let activeTabs = document.querySelectorAll('.active');

  activeTabs.forEach((tab) => {
    tab.className = tab.className.replace('active', '');
  });

  event.target.className += ' active';
  const activeTabId = event.target.id;
  const activeContentId = activeTabId.slice(0, activeTabId.length - 4);

  const tabsContent = document.querySelectorAll('.tab-content');
  tabsContent.forEach((content) => {
    content.className += (content.className.includes('hidden')) ? '' : ' hidden';
  });

  const activeContent = document.getElementById(activeContentId);
  activeContent.className = activeContent.className.replace('hidden', '')
}


const nav = document.getElementById('nav');

nav.addEventListener('click', onTabClick, false);