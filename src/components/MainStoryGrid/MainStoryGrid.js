import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <StoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </StoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper  key={story.id}>
              <OpinionStory {...story} />
            </OpinionStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
    
  @media ${QUERIES.tabletAndUp} {  
      grid-template-areas:
        'main-story secondary-stories'
        'advertisement advertisement'
        'opinion-stories opinion-stories';
      grid-template-columns: 2fr 1fr;
      gap: 16px;
  }

  @media ${QUERIES.laptopAndUp} {
      grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
      grid-template-columns: 5fr 4fr 3fr;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
      padding-right: 16px;
      border-right: 1px solid var(--color-gray-300);
  }  
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
      padding-right: 16px;
      border-right: 1px solid var(--color-gray-300);
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
      flex-direction: row;
      gap: 32px;
  }
`;

const StoryWrapper = styled.div`
  &:not(:first-of-type) {
      border-top: 1px solid var(--color-gray-300);
      padding-top: 16px;
  }
`;

const OpinionStoryWrapper = styled(StoryWrapper)`
  @media ${QUERIES.tabletOnly} {
      flex: 1;
      &:not(:first-of-type) {
          border-top: revert;
          padding: revert;
      }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    margin-top: -8px
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;


  @media ${QUERIES.tabletOnly} {
      margin-top: 32px;
  }    
`;

export default MainStoryGrid;
