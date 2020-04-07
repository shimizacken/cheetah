const { linkPreview } = require(`link-preview-node`);

function urlify(text) {
  var urlRegex = /(https?:\/\/[^\s]+)/igm;

  const result = text.match(urlRegex);
  console.log(result);

  if (Array.isArray(result) && result.length > 0) {
      return result[0]
  }

  return result;
}

function preview (url) {
    return linkPreview(url);
    // .then(resp => {
    //     console.log(resp);
    //     /* { image: 'https://static.npmjs.com/338e4905a2684ca96e08c7780fc68412.png',
    //         title: 'npm | build amazing things',
    //         description: '',
    //         link: 'http://npmjs.com' } */
    //     // Note that '' is used when value of any detail of the link is not available
    // }).catch(catchErr => {
    //     console.log(catchErr);
    // });
}

exports.urlify = urlify;
exports.preview = preview;