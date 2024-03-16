import React from "react";
import { Col, Card, Image } from "react-bootstrap";

const BlogContent = () => {
  return (
    <Col lg={8}>
      <Card className="content-detail border-gray-800">
        <Card.Body>
          <Card.Text className="text-xl color-gray-500">
            The fancy moon going in little artist painting. Thirty days of
            lavender in the dreamy light inside. Other perfect oh plants, for
            and again. I’ve honey feeling. Caring dreamland projects noteworthy
            than minimal, their it oh pretty feeling may. Include pink be.
          </Card.Text>
          <div className="mt-20 mb-20">
            <Image className="img-bdrd-16" src="images/img.jpg" alt="Genz" />
          </div>
          <Card.Text className="text-lg color-gray-500 mb-50">
            Tortor placerat bibendum consequat sapien, facilisi facilisi
            pellentesque morbi. Id conse ctetur ut vitae a massa a. Lacus ut
            bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent
            ornare accumsan elit venenatis. Congue sodales nunc quis ultricies
            odio porta. Egestas mauris placerat leo phasellu s ut sit.
          </Card.Text>
          <Card.Title className="color-white mb-30">
            Use your headings
          </Card.Title>
          <Card.Text className="text-lg color-gray-500">
            Thirty there & time wear across days, make inside on these you. Can
            young a really, roses blog small of song their dreamy life pretty?
            Because really duo living to noteworthy bloom bell. Transform clean
            daydreaming cute twenty process rooms cool. White white dreamy
            dramatically place everything although. Place out apartment
            afternoon whimsical kinder, little romantic joy we flowers handmade.
            Thirty she a studio of she whimsical projects, afternoon effect
            going an floated maybe.
          </Card.Text>
          <Card className="bg-gray-850 box-quote">
            <Card.Body>
              <Card.Text className="color-gray-500">
                Blandit consequat feugiat sed dapibus lorem diam nibh venenatis
                sodales pulvinar augue adipiscing turpis nulla sit tincidunt non
                lacus sit amet et white dreamy dramatically place.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-inline-block mt-40">
              <div className="box-author">
                <Image src="images/author2_1.png" alt="Genz" />
                <div className="author-info">
                  <h6 className="color-gray-700">Ronald Richards</h6>
                </div>
              </div>
            </Card.Footer>
          </Card>
          <Card.Title className="color-white mt-40 mb-30">
            Smaller heading
          </Card.Title>
          <div className="row">
            <div className="col-lg-8 mb-30">
              <Card.Text className="text-lg color-gray-500 mb-40">
                Thirty there & time wear across days, make inside on these you.
                Can young a really, roses blog small of song their dreamy life
                pretty? Because really duo living to noteworthy bloom bell.
                Transform clean daydreaming cute twenty process rooms cool.
                White white dreamy dramatically place everything although.
              </Card.Text>
              <Card.Text className="text-lg color-gray-500">
                White white dreamy dramatically place everything although. Place
                out apartment afternoon whimsical kinder, little romantic joy we
                flowers handmade. Thirty she a studio of she whimsical projects,
                afternoon effect going an floated maybe.
              </Card.Text>
            </div>
            <div className="col-lg-4">
              <Image
                className="img-bdrd-16 mb-30"
                src="images/img2.jpg"
                alt="Genz"
              />
            </div>
          </div>
          <Card.Text className="text-lg color-gray-500">
            Tortor placerat bibendum consequat sapien, facilisi facilisi
            pellentesque morbi. Id consectetur ut vitae a massa a. Lacus ut
            bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent
            ornare accumsan elit venenatis. Congue sodales nunc quis ultricies
            odio porta. Egestas mauris placerat leo phasellus ut sit.
          </Card.Text>
          <div className="row mt-50">
            <div className="col-lg-6 gallery-left">
              <Image
                className="img-bdrd-16 mb-30"
                src="images/img3.jpg"
                alt="Genz"
              />
            </div>
            <div className="col-lg-6 gallery-right">
              <Image
                className="img-bdrd-16 mb-20"
                src="images/img4.jpg"
                alt="Genz"
              />
              <Image className="img-bdrd-16" src="images/img5.jpg" alt="Genz" />
            </div>
          </div>
          <Card.Text className="text-center text-lg color-gray-500">
            furniture in your house
          </Card.Text>
          <Card.Title className="color-white mt-50 mb-30">
            Use your headings
          </Card.Title>
          <Card.Text className="text-lg color-gray-500">
            Thirty there & time wear across days, make inside on these you. Can
            young a really, roses blog small of song their dreamy life pretty?
            Because really duo living to noteworthy bloom bell. Transform clean
            daydreaming cute twenty process rooms cool. White white dreamy
            dramatically place everything although. Place out apartment
            afternoon whimsical kinder, little romantic joy we flowers handmade.
            Thirty she a studio of she whimsical projects, afternoon effect
            going an floated maybe.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogContent;
