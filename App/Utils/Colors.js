const tintColor = '#2f95dc';

getRandomColor = () => {
  // https://stackoverflow.com/a/1484514/3630386
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 10)];
  }
  return color;
}

export default {
  getRandomColor,
  googleAuthColor: "rgba(221, 75, 57, 1)",
  white: "rgba(255, 255, 255, 1)",
  tintColor,
  tabIconDefault: '#ccc',
  tabIconSelected: tintColor,
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',
};
