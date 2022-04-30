import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentSection from './ContentSection.js';


function ContentArea(props) {

  if (props.pieces === undefined) {
    return (<div id='content-area'></div>);
  }

  else if (props.page === 'new') {
    return contentAreaNew(props);
  }

  else if (props.page === 'categories') {
    return contentAreaCategories(props);
  }

  else {
    return contentAreaBio(props)
  }
}

function contentAreaNew(props) {
  let content = [];
  const pieces = props.dateIndex.map((idx) => props.pieces[idx]);

  let sectionIndex = 0;
  let currentYear = 0;
  let sectionPieces = [];
  for (let i in pieces) {
    let timestamp = pieces[i].dateCreated;
    let dateCreated = new Date();
    dateCreated.setTime(timestamp);
    if (dateCreated.getFullYear() != currentYear) {
      if (currentYear !== 0) {
        content.push(<ContentSection title={currentYear} pieces={sectionPieces} sectionIndex={sectionIndex} onClickThumbnail={props.onClickThumbnail} />);
        sectionIndex++;
      }
      sectionPieces = [];
    }
    sectionPieces.push(pieces[i]);
    currentYear = dateCreated.getFullYear();
  }
  content.push(<ContentSection title={currentYear} pieces={sectionPieces} sectionIndex={sectionIndex} onClickThumbnail={props.onClickThumbnail} />);
  return (
    <div id='content-area'>{
      content
    }
    </div>
  )
}

function contentAreaCategories(props) {
  const pieces = props.categoryIndex.map((idx) => props.pieces[idx]);
  let content = [];
  let category = null;
  let sectionIndex = 0;
  let sectionPieces = [];
  for (let i in pieces) {
    //if (pieces[i].)
  }
  return (
    <div id='content-area' >{
      content
    }</div>
  )
}

function contentAreaBio(props) {
  let exhibitions = <div>
    <table>
      <tr>
        <td>2022</td>
        <td>Group Exhibition, <em>Made in California</em>, Brea Gallery, Brea, CA
        </td>
      </tr>
      <tr>
        <td>2022</td>
        <td>Group Exhibition, <em>Drama - Storytelling in Art</em>, Orange County Center for Contemporary Art, Santa Ana, CA
        </td>
      </tr>
      <tr>
        <td>2022</td>
        <td>Group Exhibition, <em>Intergalactic Open 3</em>, Shockboxx Gallery, Hermosa Beach, CA
        </td>
      </tr>
      <tr>
        <td>2021</td>
        <td>Group Exhibition, <em>Surreal Salon</em>, Baton Rouge Gallery - center for contemporary art, Baton Rouge, LA 70808
        </td>
      </tr>
    </table>
  </div>;

  let bio = <div><p>Whenever I was asked to write an autobiography in elementary school,  I always began with the clear statement that at one time I had seen a sea monster off the coast of San Diego.  If in hindsight we suspect that it was a buoy or a garbage scow, it is now a clear, incontrovertible memory.  So:</p>

    <p><i>When I was very young, I saw a sea monster off the coast of San Diego.</i></p>

    <p>For the most part, as a child I lived in East Lansing, MI, the home of the Spartans (or at least the Spartans-in-Exile).  Like many kids, I drew a lot, but it was only around age 12 that I looked at a painting (probably some hackwork on the cover of the <i>Fiend Folio</i> or similar) and thought: I could do that!</p>

    <p>I couldn't.</p>

    <p>In high school, I admired the work of independent comics creators: Wendy Pini, Paul Chadwick, and especially Dave Sim, the creator of <i>Cerebus</i> (his later sociopathic tendencies notwithstanding). He had sworn to (and later actually did) produce 300 issues, of bizarre, experimental, and masterfully accomplished work, all in finely-hatched pen-and-ink.  Initially a parody of <i>Conan</i> starring a cartoon aardvark, the book eventually addressed political and religious satire, the death of Oscar Wilde, the pain of lost love, and a thousand other topics, all with nuance and humor.</p>

    <p>Inspired in part by the craft of <i>Cerebus</i>, but also more and more by the megalomania it also represented, I worked with my closest friend on a graphic novel.  In the various stages of its development, our prospective <i>magnum opus</i> was titled <i>Terminus</i>, <i>The Fall</i>, and <i>The Gozmo Success Story</i> respectively.  We never published more than 3 issues of any title, but a ratio of 1/100 isn’t terrible, is it?</p>

    <p>After high school, I moved to Brooklyn for a year and became very sophisticated.  Then I moved back to East Lansing for a few months and degenerated.  Eventually I attended Reed College in Portland, OR, majoring in Studio Art.  This was poor planning on my part.  Reed was a fantastic intellectual environment, and I would have been well-served to focus on some intellectual discipline, but what I wanted from an art program was to be taught to draw well, which was not their focus.  After graduating I languished in the dampness of Portland for a few years.  This was the period when I published <i>The Gozmo Success Story</i>.  The perfectionism, and level of detail I tried to put into it made it such a slow process, at such odds with my grandiose plans for the scope of the story that I gave up in despair.</p>

    <p>I moved to San Francisco, where, during the gullibility of the dot-com boom I was able to sell myself as a computer programmer.   I did no art for several years, replacing it with drinking.  Then I lived in Budapest, Hungary, for a while.</p>

    <p>Then I moved to LA where I worked in pre-production art — storyboards and concept development — on a lot of movies that never got made, including some for the fellow who wrote <i>Braveheart</i> and directed <i>Secretariat</i>.  It really hit home at this point how little I knew about the fundamentals of drawing and painting.  As a storyboard artist — at least a good one — one needs complete instinctive control over one’s drawing: anatomy, composition, perspective, how to draw a circle without fucking up too badly, and a gamut of other skills, all to be employed rapidly, at a director’s command.  I did a lot of learning and practicing during my time in Hollywood, though I don't think I ever quite hit the mark.</p>

    <p>While living there, I met my wife, Mary C. Greening.  We moved to Pittsburgh, PA for her work, and our son, Leif, was born there.  We moved back to Northern California to raise him.</p>

    <p>During the time Leif was alive, I didn’t do much painting or drawing.  He had multiple severe medical conditions, and even when he was not under threat,  I was working full-time and wanted to spend time with him in the off-hours.  In 2019, he died at age 8, from his second cancer.</p>

    <p>I turned my energies to painting at this point.  It seemed like there wasn’t much else to do.</p>
  </div>;

  let statement = <div><p>For the most part, my current paintings are definitely narrative, even... illustrative.  Like a still from an unknown movie or an unpublished book's cover they fix on a critical moment in a story — a story which neither I nor the audience know.  I am no more familiar with the characters, events and scene than the viewer.  The picture asks us to reconstruct the sequence in which it occurs, and of which it is the exemplary moment.  And more, because the visual elements are illogical or fantastic, to construct a world in which this event could possibly occur.</p>

    <p>My strongest wish in these recent paintings is to surprise <i>myself</i> — to make myself wonder <i>what is happening? What could come next?</i> As I would with a fascinating work by somebody else.</p>

    <p>Deliberate ambiguity is part of this.  I try to make the imagery as open to interpretation as possible.  Are the critters in <i>Our Secret Plantation</i> a cancerous malignancy, an oppressed underclass, or a helpful symbiote?  Is the woman in <i>Not Another Sacred Birth</i> coming to kiss or kill the king above?</p>

    <p>I use various tricks to keep myself in the dark about the meaning of each piece, while I sit with it for weeks at a time.  The most important of which is working strictly by <i>feel</i> during the ideation process.  I keep revising the plan until it feels significant and right, but absolutely does not have a fixed meaning.  It’s only when I’m confused but convinced that I move on to the final piece.</p>
  </div>
  return (
    <div id='content-area' >
      <ContentSection title="Exhibitions" sectionIndex="bio">{exhibitions}</ContentSection>
      <ContentSection title="Bio" sectionIndex="bio">{bio}</ContentSection>
      <ContentSection title="Statement" sectionIndex="statement">{statement}</ContentSection>
    </div>
  )
}

export default connect((state) => {
  return {
    pieces: state.storePieces.pieces,
    dateIndex: state.storePieces.dateIndex,
    categoryIndex: state.storePieces.categoryIndex,
    categories: state.storePieces.categories,
    page: state.switchPage.page
  }
})(ContentArea);
