import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0';
export const newStoriesUrl = `${baseUrl}/topstories.json`;
export const itemUrl = `${baseUrl}/item/`;

//this function gets ids of stories/news
export const getStories = async () => {
  try {
    const res = await axios.get(newStoriesUrl).then(({ data }) => data);

    return res;
  } catch (err) {
    console.error(err);
  }
};

//this function gets news/stories
export const getStory = async (storyId) => {
  try {
    const res = await axios
      .get(`${itemUrl + storyId}.json`)
      .then(({ data }) => data);
    return res;
  } catch (err) {
    console.error(err);
  }
};






