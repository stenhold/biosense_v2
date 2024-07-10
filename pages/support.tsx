import React from 'react';
import Layout from '../app/components/Layout';
import GridContainer from '../app/components/Grid/GridContainer';
import GridItem from '../app/components/Grid/GridItem';
import Image from 'next/image';

const HomePage = () => {
  return (
    <Layout>
      <GridContainer>
        {/* Headline Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-16">
          <GridItem className="col-span-1">
            <h1 className="text-3xl text-right text-gray-900 font-light font-kanit"> Support </h1>
            <h2 className="text-sm text-right text-gray-800 font-light font-kanit">
              We're here to help <br />
            </h2>
          </GridItem>
          <div className="col-span-2"></div> {/* Empty columns */}
        </div>

        {/* Text and Image Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <GridItem className="col-span-1 flex items-start justify-start w-full h-full">
            <p className="text-right text-sm text-gray-800 font-light font-kanit w-full h-full">
              Biosense is a wellness and medical technology company that has developed sensitive nanomaterial-based biosensors
              that enable rapid measurement of important metabolites from a small sample of saliva. Biosense’s nanomaterial
              platform demonstrates high sensitivity while maintaining target specificity using conventional enzymes.
              The initial focus is measurement of lactate for professional sports, with plans to eventually move into
              the medical device market to become a glucose measurement device for type 2 diabetics.
            </p>
          </GridItem>
          <GridItem className="col-span-2 w-full h-full">
            <Image
              src="/images/biosense_support.png"
              alt="French Salon"
              width={800}
              height={600}
              layout="responsive"
              className="w-full h-full object-cover"
            />
          </GridItem>
        </div>
      </GridContainer>
    </Layout>
  );
};

export default HomePage;
