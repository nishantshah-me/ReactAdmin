import React, { Component, lazy, Suspense } from "react";
import Tile from "./../../components/Tile";
import "./../../App.css";
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table
} from "reactstrap";

function Dashboard() {
  return (
    <div className="App">
      <div class="row center">
        <div class="col-sm-16">
          <div class="card">
            <div class="row card-body">
              <Tile
                title="Daily Active"
                value="131"
                bgColor="bg-primary"
              ></Tile>
              <Tile title="Weekly Active" value="232" bgColor="bg-warning" />
              <Tile title="Monthly Active" value="890" bgColor="bg-danger" />
              <Tile title="Total Riders" value="92,012" bgColor="bg-success" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Verify driver</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go to drivers
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Make payments</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Pay
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
