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

const preview = (url) => linkPreview(url);

exports.urlify = urlify;
exports.preview = preview;