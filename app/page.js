import React from 'react';
import Layout from './components/Layout';
import GridContainer from './components/Grid/GridContainer';
import GridItem from './components/Grid/GridItem';
import Image from 'next/image';

const HomePage = () => {
    return (
        <Layout>
            <GridContainer>
                {/* Headline Row */}
                <div className="grid grid-c ols-1 md:grid-cols-3 gap-2 pt-16">
                    <GridItem className="col-span-1">
                        <h1 className="text-5xl text-right text-gray-300 font-medium font-poppins">FRENCH SALON</h1>
                    </GridItem>
                    <div className="col-span-2"></div> {/* Empty columns */}
                </div>

                {/* Text and Image Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <GridItem className="col-span-1 flex items-start justify-start">
                        <p className="text-sm text-right text-gray-300 font-light font-poppins">
                            A haven of enlightened minds where ideas dance and thoughts blossom. Conversations flow like fine wine, rich with wisdom and wit. A space where light-hearted banter meets profound discourse. Democracy in its purest form, where every voice finds a stage. An arena for passionate debates, free from ivory tower pretenses. A sanctuary for meaningful connections and intellectual camaraderie.
                        </p>
                    </GridItem>
                    <GridItem className="col-span-2">
                        <Image
                            src="/images/salon_2.png"
                            alt="French Salon"
                            width={800}
                            height={600}
                            layout="responsive"
                        />
                    </GridItem>
                </div>

            </GridContainer>
        </Layout>
    );
};

export default HomePage;
