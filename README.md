# hapi-glue-react starter

## Usage

    npm install
    npm start

Bundle client side js with `npm run bundle` if any changes to `client.js` are made

## Rationale
Built upon tablackmore/viaplay-fullstack which I found with a quick Gihub search. I lifted the react components mostly wholesale from there and the viaplay / trailers API fetching, which obviously saved quite a bit of time. The parts I re-used make a up good chunk of the assignment but in my mind are fairly trivial to implement so I instead focused on setting up a solid strucutre for further development. It is based on Hapi.js which I feel has a much better story than Express in terms of configurability and provides a solid backbone for larger projects. To make this exercise more worthwile for me I also tried to learn some new technology - notably rendering React views serverside and re-mounting them on the client. This implementation is fairly fragile now but at least it works!

If I had more time I would have done more from scratch but given project deadlines and family it is what it is :)

## Highlights
- Hapi.js with full configurability through Glue
- Plugin based architecture
- Isomorphic React components served from Hapi

## TODOs / things obviously missing
- Tests - obviously hugely important in a complex project but left out due to time constriants
- Development server and structure for the client side app.
- Callbacks => Promises => Async / await (or co + generators if ES2015 is the limit)
- Async fetching of trailer on the client - Unnecessary to wait for 2 API calls before serving anything to the client.
- React routing - To get the full benefits of the isomorphic features
- Better client side state management - I personally like Redux
- Expose /api - To better serve a rich client also expose the data as REST endpoints
