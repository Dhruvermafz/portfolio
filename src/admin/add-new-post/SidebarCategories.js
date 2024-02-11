import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCategory, removeCategory } from "../../actions/categories";
import { Row, Col, Form } from "react-bootstrap";

import { Card, ListGroup, Button, InputGroup } from "react-bootstrap";

class SidebarCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      categoryType: "1", // Setting default categoryType
    };
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onCategoryAdd = this.onCategoryAdd.bind(this);
    this.onCategoryRemove = this.onCategoryRemove.bind(this);
    this.onCategoryTypeChange = this.onCategoryTypeChange.bind(this);
  }

  onCategoryChange(e) {
    const category = e.target.value;
    this.setState(() => ({ category: category }));
  }

  onCategoryTypeChange(categoryType) {
    this.setState(() => ({ categoryType: categoryType }));
  }

  onCategoryAdd() {
    const { category, categoryType } = this.state;
    const categoryObj = {
      category: category,
      categoryType: categoryType,
    };
    this.props.dispatch(addCategory(categoryObj));
  }

  onCategoryRemove(categoryId) {
    this.props.dispatch(removeCategory(categoryId));
  }

  render() {
    return (
      <Card className="mb-3">
        <Card.Header className="border-bottom">
          <h6 className="m-0">{this.props.title}</h6>
        </Card.Header>
        <Card.Body className="p-0">
          <ListGroup variant="flush">
            <ListGroup.Item className="px-3 pb-2">
              {this.props.data.categories.map((category) => (
                <Row key={category.categoryId}>
                  <Col sm={9}>
                    <Form.Check
                      type="checkbox"
                      id={category.categoryId}
                      label={category.category}
                    />
                  </Col>
                  <Col sm={3}>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="mb-1"
                      onClick={() => this.onCategoryRemove(category.categoryId)}
                    >
                      remove
                    </Button>
                  </Col>
                </Row>
              ))}
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col sm={3}>
                  <strong>Type :</strong>
                </Col>
                <Col sm={4}>
                  <Form.Check
                    type="radio"
                    name="category-type"
                    value="1"
                    label="Code"
                    checked={this.state.categoryType === "1"}
                    onChange={() => this.onCategoryTypeChange("1")}
                  />
                </Col>
                <Col sm={4}>
                  <Form.Check
                    type="radio"
                    name="category-type"
                    value="2"
                    label="Other"
                    checked={this.state.categoryType === "2"}
                    onChange={() => this.onCategoryTypeChange("2")}
                  />
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex px-3">
              <InputGroup className="ml-auto">
                <Form.Control
                  onChange={this.onCategoryChange}
                  placeholder="New category"
                />
                <InputGroup.Append>
                  <Button
                    variant="white"
                    className="px-2"
                    onClick={this.onCategoryAdd}
                  >
                    <i className="material-icons">add</i>
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}

SidebarCategories.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
};

SidebarCategories.defaultProps = {
  title: "Categories",
};

const mapStateToProps = (state) => {
  console.log("components/add-new-post > mapStateToProps");

  return {
    data: state,
  };
};

export default connect(mapStateToProps)(SidebarCategories);
