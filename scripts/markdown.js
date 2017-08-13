const defaultText = 'Heading\r\n=======\r\n\r\nSub-heading\r\n-----------\r\n \r\n### Another deeper heading\r\n \r\nParagraphs are separated\r\nby a blank line.\r\n\r\nLeave 2 spaces at the end of a line to do a  \r\nline break\r\n\r\nText attributes *italic*, **bold**, \r\n`monospace`, ~~strikethrough~~ .\r\n\r\nShopping list:\r\n\r\n  * apples\r\n  * oranges\r\n  * pears\r\n\r\nNumbered list:\r\n\r\n  1. apples\r\n  2. oranges\r\n  3. pears\r\n\r\nThe rain---not the reign---in\r\nSpain.\r\n\r\n [typenil](http:\/\/typenil.com)';

var MarkdownViewer = React.createClass({
  getInitialState: function () {
    return {
      rawMarkup: defaultText,
      renderedMarkup: this.renderMarkup(defaultText)
    };
  },

  renderMarkup: function (rawMarkup) {
    var html = marked(rawMarkup, { sanitize: true });
    return { __html: html };
  },

  handleMarkupChange: function (e) {
    this.setState({ rawMarkup: e.target.value });
    this.setState({ renderedMarkup: this.renderMarkup(e.target.value) });
  },

  render: function () {
    return (
      <div className="viewerRow row">
        <div className="markdownDiv col-xs-6">
          <h1 className="markdownHeader text-danger">Raw Markdown</h1>
          <form className="markdownForm">
            <textarea
              className="markdownBox well form-control"
              rows="20"
              width="100%"
              type="textarea"
              placeholder="Enter markdown..."
              value={this.state.rawMarkup}
              onChange={this.handleMarkupChange} />
          </form>
        </div>
        <div className="renderedDiv col-xs-6">
          <h1 className="renderedHeader text-primary">Rendered HTML</h1>
          <div className="renderedMarkup well">
            <span dangerouslySetInnerHTML={this.state.renderedMarkup} />
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <MarkdownViewer />,
  document.getElementById('content')
);