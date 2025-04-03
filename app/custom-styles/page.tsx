'use client';

import React from 'react';
import { Smiley, ArrowArcLeft } from "@phosphor-icons/react";

export default function CustomStyles(){
    return (
        <div className="bg-primary-100 lg:bg-secondary-100 xl:bg-success-100 md:bg-warning-100 xs:bg-danger-100 w-full container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-secondary-500 text-display1">Display 1</h1>
        <h1 className="text-secondary-500 text-display2">Display 2</h1>
        <h1 className="text-secondary-500 text-display3">Display 3</h1>
        <h1 className="text-secondary-500 text-display4">Display 4</h1>
        <h1 className="text-secondary-500 text-display5">Display 5</h1>
        <br/>
        <h1 className="text-primary-700">heading 1</h1>
        <h2 className="text-primary-700">heading 2</h2>
        <h3 className="text-primary-700">heading 3</h3>
        <h4 className="text-primary-700">heading 4</h4>
        <h5 className="text-primary-700">heading 5</h5>

        <br/>
        <div className="flex flex-col gap-4">
          <label className="text-success-700 text-label1">Label 1</label>
          <label className="text-success-700 text-label2">Label 2</label>
          <label className="text-success-700 text-label3">Label 3</label>
          <label className="text-success-700 text-label4">Label 4</label>
          <label className="text-success-700 text-label5">Label 5</label>
        </div>
        <br/>
        <div className="flex flex-col gap-4">
          <p className="text-warning-300 text-body-xxl-400">Body 1</p>
          <p className="text-warning-300 text-body-xxl-500">Body 2</p>
          <p className="text-warning-300 text-body-xxl-600">Body 3</p>
          <p className="text-danger-500 text-body-xl-400">Body 4</p>
          <p className="text-danger-500 text-body-xl-500">Body 5</p>
          <p className="text-danger-500 text-body-xl-600">Body 6</p>
          <p className="text-primary-800 text-body-l-400">Body 7</p>
          <p className="text-primary-800 text-body-l-500">Body 8</p>
          <p className="text-primary-800 text-body-l-600">Body 9</p>
          <p className="text-secondary-800 text-body-md-400">Body 10</p>
          <p className="text-secondary-800 text-body-md-500">Body 11</p>
          <p className="text-secondary-800 text-body-md-600">Body 12</p>
          <p className="text-success-800 text-body-sm-400">Body 13</p>
          <p className="text-success-800 text-body-sm-500">Body 14</p>
          <p className="text-success-800 text-body-sm-600">Body 15</p>
          <p className="text-gray-300 text-body-xs-400">Body 16</p>
          <p className="text-gray-300 text-body-xs-500">Body 17</p>
          <p className="text-gray-300 text-body-xs-600">Body 18</p>
          
        </div>
        <div className="flex gap-4">
          <Smiley size={32} />
          <ArrowArcLeft size={32} />
        </div>
      </div>
    </div>
    );
};