export const getSlugOfHash = (hash) => {
    return hash ? hash.slice(1): 'home';
}

export const getPageData = (slugOfHash) => {
    const localDataNav = JSON.parse(localStorage.getItem('dataNav'));
    const data = localDataNav.find(({slug}) => slugOfHash.includes(slug));
    return data
};

export const hashChangeEvent = (actionFunction) => {
    window.addEventListener('hashchange', () => {
        actionFunction(location.hash)
    })
};