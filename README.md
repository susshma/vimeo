# The Playlist Page

We would like you to create an interactive playlist viewing experience, making use of our [open source player](https://developer.vimeo.com/player). A rough design of the page is below, but feel free to take creative liberties with the look and feel.

## Your Spec

### Layout

```
 ----------------------    ----------------
|                      |   | [next video] |
|       [player]       |   ----------------
|                      |   | [next video] |
 ----------------------    ----------------
    Title                  | [next video] |
    Description            ----------------
                           | [next video] |
                           ----------------
```

### Criteria
- Choose your favorite channel on https://vimeo.com/channels
- Make an API application for your page ([documentation](https://developer.vimeo.com/api/start))
- `GET` the list of videos from channels endpoint ([`https://api.vimeo.com/channels/{channel_id}/videos`](https://developer.vimeo.com/api/endpoints/channels#GET/channels/{channel_id}/videos))
- The player should be our [open source player](https://developer.vimeo.com/player), automatically loaded with the first video in the channel
- All subsequent videos go in the list to the right of the player
- Clicking a video in the list loads it into the player and scrolls the list appropriately
- Aside from the view libraries provided (React + CSS Modules), please write everything else from scratch
    - No libraries or frameworks, but icon sets (FontAwesome, ionicoons) are fine to use


## Things We Care About
- Semantic HTML
- Purposeful CSS (clean syntax, use of the cascade, etc.)
- Modular, reusable JavaScript
- Page responsiveness
- Layouts using modern CSS (really _flex_ your skills)
- Purposeful transitions & animations

## Things We Don't Care About
- Legacy browser support

## Bonus Points For
- Loading states
- Follow Vimeo styles from our site
- General playfulness

## Getting started

1. Install yarn
    ```
    $ curl -o- -L https://yarnpkg.com/install.sh | bash
    ```
2. Install dependencies
    ```
    $ yarn install
    ```
3. Run the development server (includes live reloading)
    ```
    $ yarn serve
    ```
4. Open the page
    ```
    $ open http://localhost:8080
    ```

## Submission

1. Please answer the following questions in your README:

    1. Was the question/problem clear? Did you feel like something was missing or not explained correctly?
        - The problem was pretty clear to me. The requirement was a bit open ended which i liked better than having a rigid set of requirement.

    2. How much time did you spend on each part: understanding, designing, coding, testing?
        Total i spent about 5 hours. About half and hour understanding, and half hour for initial design on how i was going to do and that evolved as i was building the code. So to break it down
         - Understanding and initial design (1hr)
         - Coding and incremental desigining (3hr)
         - Testing and retouching and rearraning modules where needed (1hr)

    3. What would you have done differently if you have more time or resources?
        - The first thing i would do if i had more time was write solid unit tests for all my components.
        - Solve some performance issues. I see the whole playlist section is rerendered when i click on the vidoes
        - the transition from loading to playlist is a bit abrupt, im not sure how i would solve it but thats a eyesore for me i would definitely 
          spent more time on fixing that.
        - Move the active video top of the list and scroll the view to the video player
        - Add support to load more results in the playlist.
        - Add more design touch to the player, so it looked more real.
        - Have more modular/generic player styles and a bit more sleek UI interactios with subtle animations

    4. Are there any performance bottlenecks with your solution? if so, what are they and what can you do to fix them/minimize their impact?
        - I would break out playlist to have a playlist container and seperate video item, so that the `onclick` event won't render the whole playlist section each time a new video is selected.
        - 

    5. How would your solution cope if the API was slow, broken, or returned incorrect data?
        - If its slow there is a loader that indicates its pulling the data from channels
        - In case of some error in API it will display error page.
        - In case of incorrect or empty response returned, it will also have no response page

    6. Anything else you want to share about your solution or the problem?
        - In all i enjoyed working on this problem. Thank you for creating a very realistic problem that vimeo solves everyday.

2. Run the submit script to create a gist of your work to send back to us

    ```
    $ yarn submit
    ```

    **_PS:_** The `yarn gist` command will flatten your directory structure into the file name in the gist, that is ok.

    **_PPS:_** Your built assets (bundle.js & bundle.css) will be included in the gist, that's also ok.
