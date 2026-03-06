import React from 'react';

import {
  Line,
  InsetBox,
} from '@terminal/TerminalComponents';

import List from '@terminal/retcomdevice/Basic/List/List';
import { Message } from "@terminal/retcomdevice";

import TerminalWallet from '@terminal/retcomdevice/Basic/TerminalWallet/TerminalWallet'

export const SYSTEM_COMMANDS = {
  "Help": () => ({
    content: (
      <Message
        title="Help"
        subtitle="RCD-7 RETINAL INTERFACE v2.047"
        theme="corporate"
      >
        <InsetBox title="BASIC COMMANDS:">
          <Line yellow>• <b>Help</b> - Display this message</Line>
          <Line yellow>• <b>List</b> - View all access points and status</Line>
          <Line yellow>• <b>Clear</b> - Clear terminal display</Line>
        </InsetBox>
        <InsetBox title="NAVIGATION:">
          <Line yellow top>• Type or tap any command name to execute</Line>
          <Line yellow top>• Commands marked [PW] require password authentication</Line>
          <Line yellow top>• Click ▶/▼ to expand/collapse command groups</Line>
        </InsetBox>
      </Message>
    )
  }),

  "Access Points": ({
    discoveredSecrets = [],
    campaignCommandList = [],
    setInputCallback = () => {},
    discoveredPasswords = {},
  }) => {
    return {
      content: (
        <List
          discoveredSecrets={discoveredSecrets}
          campaignCommandList={campaignCommandList}
          setInputCallback={setInputCallback}
          discoveredPasswords={discoveredPasswords}
        />
      )
    };
  },

  "Clear": () => ({
    type: 'clear',
  }),

  "Wallet": () => {
    return {
      content: (
        <TerminalWallet />
      )
    };
  },

  "Reset": () => ({
    type: 'reset',
  })
};

export default SYSTEM_COMMANDS;
