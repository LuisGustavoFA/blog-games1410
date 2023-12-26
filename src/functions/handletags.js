export const handletags = (data) => {
  const allTags = data.reduce((tags, item) => {
    tags.push(...item.tags);
    if (item.games) {
      item.games.forEach(game => {
        if (game.tags) {
          tags.push(...game.tags);
        }
      });
    }
    return tags;
  }, []);

  const uniqueTags = [...new Set(allTags)];

  let count = []
  uniqueTags.forEach((tag) => {
    let number = 0;
    for (const item of data) {
      if (item.tags.includes(tag)) number += 1;
    }
    count.push(number);
  })

  const tagCount = [...count]; 

  const test = [];
  for (let i=0; i<uniqueTags.length; i++) {
    test.push([uniqueTags[i], `${tagCount[i]}`]);
  }

  test.sort((a, b) => b[1] - a[1]);

  return test;
}