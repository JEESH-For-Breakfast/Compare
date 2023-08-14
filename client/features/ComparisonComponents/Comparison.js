import React, { useContext, useEffect, useState } from "react";
import TableOfContents from "./TableOfContents";
import CompanyProfileTable from "./CompanyProfileTable";
import SwotAnalysisTable from "./SwotAnalysisTable";
import ProductProfileTable from "./ProductProfileTable";
import MarketApproachTable from "./MarketApproachTable";
import TakeawaysTable from "./TakeawaysTable";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import ComparisonTable from "./ComparisonTable";

const Comparison = () => {
  // const title = "Company Profile";
  // const headers = ["Founded", "Company Size", "Market Share", "Revenue"];
  // const companies = [
  //   { id: 1, name: "Splooge", founded: "2000", companySize: "Large", marketShare: "10%", revenue: "$1M" },
  //   { id: 2, name: "Jabooki", founded: "1995", companySize: "Medium", marketShare: "8%", revenue: "$800K" },
  //   { id: 3, name: "NesQuickski", founded: "2010", companySize: "Small", marketShare: "5%", revenue: "$500K" }
  // ];

  const companyData = {
    "features": [
      {
        "companyId": 7,
        "features": [
          {
            "key": "Customer Service Software",
            "value": "Yes, Gorgias offers a Customer Service Software feature[1][3][4]. Gorgias is a helpdesk designed for e-commerce stores that provides multichannel customer service from a single app[1]. It centralizes all support tickets in one place and displays all customer data when talking to them, allowing users to edit orders, modify subscriptions, and refund payments without leaving the helpdesk[1]. Gorgias also automates repetitive tasks to save time and increase productivity, from automating the tasks like cutting and pasting commonly asked questions to fully automating and closing out tickets[1]. Additionally, Gorgias offers live chat support software that connects customers with support agents that can answer their questions in real-time over a chat window[2]. Gorgias integrates with other customer service software to improve support and enhance functionality[4]."
          },
          {
            "key": "Omnichannel Support",
            "value": "Yes, Gorgias offers an Omnichannel Support feature[1][3][5]. Gorgias is a customer service platform built specifically for ecommerce stores, and it offers everything needed to implement omnichannel customer service with just a few clicks[1]. With Gorgias, you can centralize all your conversations using a unified customer support platform, which connects multiple customer service channels under a single, easy-to-use platform[1]. Gorgias also has powerful integrations with a wide range of messaging platforms, including fast-loading live chat widgets for offering real-time live chat[1]. Additionally, Gorgias offers automations to speed up support, and you can connect all your channels[3]. Gorgias is an all-in-one customer service platform that seamlessly integrates with your ecommerce brand, and it empowers your team to resolve tickets, generate sales, and report on the revenue your team earns[5]."
          },
          {
            "key": "Historical Order Information",
            "value": "Yes, Gorgias offers a Historical Order Information feature[1]. This feature allows you to see all historical order information and every conversation and transaction a customer has had with your brand, including on social media. This context allows you to understand the customer's past interactions with your brand, leading to a quicker, more productive conversation. You can also avoid asking customers to repeat information they've already told your brand[1]."
          },
          {
            "key": "Automation and Templates",
            "value": "Yes, Gorgias offers Automation and Templates features. The Automation Add-on Features include Autoresponders, Custom Flow Templates, and Rule Templates[1][3][4][6]. Autoresponders are rules that use AI technology to deflect and resolve tickets without the need to build or manage rules manually[1][6]. Custom Flow Templates are examples of custom Chat flows that can be used within Gorgias[1]. Rule Templates are pre-made rules that can be installed directly from the library[3][5]. \n\nGorgias also offers Macros, which are pre-made and dynamic templates to help customer service representatives answer questions and resolve customer issues much faster than writing each email from scratch[2]. Macros can be used for any channel, not just email, since Gorgias is a centralized helpdesk. \n\nOverall, Gorgias' Automation and Templates features are designed to automate simple, repetitive inquiries to give customers instant answers and free customer service representatives to focus on higher-value tasks[4]."
          },
          {
            "key": "Ecommerce Platform Integration",
            "value": "Yes, Gorgias offers an Ecommerce Platform Integration feature. Gorgias integrates with the top ecommerce platforms and apps to maximize your helpdesk and enhance your customer support[1]. Gorgias is an ecommerce helpdesk that turns your customer service into a profit center. It centralizes all your support tickets in one place and has all your customer's data displayed when you're talking to them. You can edit orders, modify subscriptions, and refund payments without leaving your helpdesk. Gorgias also tracks all sales generated by support agents over text messages, social media answers, and live chat conversations on your website[3]. The Gorgias App Store features 85+ high-quality integrations with other leading ecommerce tools[6]."
          },
          {
            "key": "Email and Social Media Support",
            "value": "Yes, Gorgias offers email and social media support features. According to the search results, Gorgias is an all-in-one customer service platform built specifically for ecommerce brands that seamlessly integrates with your entire stack, including Shopify, BigCommerce, and Magento[3]. Through the platform, you can manage all of your organization's customer service channels in real-time, from live chat to email to social media[3]. Gorgias integrates directly with Facebook and Instagram, so your support agents can quickly reply to the questions they need to (and automate what they don't) [1]. Additionally, Gorgias supports email as one of its helpdesk features[4]."
          },
          {
            "key": "Inbox and Messenger",
            "value": "Yes, Gorgias offers an Inbox and Messenger feature for customer support. Gorgias integrates with Facebook Messenger, Instagram DMs, and WhatsApp, allowing ecommerce stores to centralize customer conversations across multiple channels under one user-friendly dashboard[3][6]. Gorgias also allows businesses to create automated customer service workflows for Facebook Messenger, set business hours, and automate responses to set customer expectations[3]. Additionally, Gorgias offers live chat support that connects customers with support agents that can answer their questions in real-time over a chat window[4][5]."
          },
          {
            "key": "Help Center",
            "value": "Yes, Gorgias offers a Help Center feature[1][3]. With the Gorgias native Help Center, users can set up Help articles and FAQ pages on their website sorted into categories for customers to browse[1]. The Help Center provides quick answers for simple questions, making it a hub for customer service, education, and engagement[3]. Users can customize their Help Center by setting up contact methods, enabling the chat widget on their Help Center page, and adding contact cards[2]. Additionally, Gorgias offers an Automation Add-On that provides instant, automated answers to common questions via email, Help Center, and chat widget[4]."
          },
          {
            "key": "Integrations and Custom Apps",
            "value": "Yes, Gorgias offers Integrations and Custom Apps feature. Gorgias integrates with the top ecommerce platforms and apps to maximize your helpdesk. It allows users to build custom features into their apps, without code[1]. Gorgias also allows users to add custom branding (logos, brand colors, etc.) to self-service portals, chatbots, etc. [2]. Additionally, Gorgias can be integrated with Document360, a knowledge base software, to manage, organize, respond to, and report on customer queries[3]. Gorgias has a deep integration with Shopify, the ecommerce platform, which allows support teams to view a customer's purchase history from within a ticket, perform refunds, and create orders. Integrations with apps like Shopify make it easy to create macros with third-party information embedded in the copy[5]."
          },
          {
            "key": "User Management",
            "value": "Gorgias offers automation features that can help streamline customer support processes and provide instant answers to simple inquiries[1][2]. These automation features include the ability to create rules, auto-tag messages, auto-reply, and trigger other actions based on message content, sentiment, or purchase amount[3]. While Gorgias does offer features related to support and ticket management[4][5], there is no specific mention of a dedicated user management feature in the search results. It is recommended to refer to Gorgias' official documentation or contact their support team for more information on user management capabilities."
          },
          {
            "key": "Pricing",
            "value": "Yes, Gorgias offers a pricing feature[1][4][5]. Gorgias offers a varied selection of pricing plans which combine various feature limits and access to features. Each plan is suitable for a certain type of business and it mostly depends on ticket volumes you want to handle, user seats, and type of features you need[4]. The pricing plans range from 50 tickets per month at $10/month to 5000 tickets per month at $900/month[5]. The pricing plans are designed to scale with your business[1]."
          }
        ]
      },
      {
        "companyId": 8,
        "features": [
          {
            "key": "Customer Service Software",
            "value": "Yes, Intercom offers a Customer Service Software feature. Intercom provides AI-powered customer service software with various features, including conversation summarization[1][2][3]. The conversation summarization tool allows support representatives to generate a detailed TL;DR (Too Long; Didn't Read) summary of an entire customer conversation with just one click[1][2]. This feature helps maximize team efficiency by reducing the time spent reading through lengthy conversations[2].\n\nIntercom's customer service solution combines automation and human support to resolve issues faster, boost customer satisfaction, and reduce team workload[4]. It offers a powerful Messenger that works alongside existing support tools, providing customers with the choice of self-serve or live support[5]. Intercom also includes features like automated support, resolution bot for automating answers to common questions, and a Messenger-first ticketing solution[5].\n\nOverall, Intercom's Customer Service Software feature provides a comprehensive solution for managing customer support interactions efficiently and effectively."
          },
          {
            "key": "Omnichannel Support",
            "value": "Yes, Intercom offers an Omnichannel Support feature[2]. This means that Intercom provides integrated and seamless support across multiple different channels, allowing customers to engage with businesses through various communication channels[2]. Some of the channels supported by Intercom include email, social messaging channels, SMS, and in-app messages[1][5][6]. With Intercom's Omnichannel Support, businesses can provide a consistent and personalized customer experience across different platforms, improving customer satisfaction and engagement[4]."
          },
          {
            "key": "Historical Order Information",
            "value": "Yes, Intercom does offer a Historical Order Information feature in the form of AI-generated conversation summaries[4]. This feature allows managers to instantly summarize a conversation between their team and the customer, saving them from having to read through blocks of emails or chats. The summary tool is part of Intercom's AI-powered beta features, which have been given access to several hundred customers[1]. However, it's worth noting that Intercom's reports focus on lead generation, customer engagement, and customer support, but do not specifically mention a Historical Order Information feature[3]."
          },
          {
            "key": "Automation and Templates",
            "value": "Yes, Intercom offers Automation and Templates features. Intercom's Automation feature allows users to build customizable workflows using bots that deliver real value to customers and teammates[1][2]. Intercom's Templates feature allows users to create canned answers or templates for email responses, and create custom templates with flexible styling options, edit images, font and button styling, and easily preview on mobile and desktop[3][6]."
          },
          {
            "key": "Ecommerce Platform Integration",
            "value": "Yes, Intercom offers Ecommerce Platform Integration as one of its features. With Intercom for E-commerce, you can use one platform to support and message your customers, providing personalized support for order inquiries, shipping information, and item stock availability[1]. Intercom also offers a wide range of integrations, including with popular marketing tools, to enhance its functionality and provide a seamless experience for e-commerce businesses[2][4]."
          },
          {
            "key": "Email and Social Media Support",
            "value": "Yes, Intercom offers Email and Social Media Support features[1][3][4]. Intercom allows teams to forward emails and social media messages to their team inbox, so they can handle all support requests in one place[1]. They also offer targeted email, mobile push, and in-app messages to engage with customers[3]. Intercom's email features include a conversational email experience where customers can reply directly to the Intercom Inbox, a Series tool to orchestrate seamless campaigns across all channels, and a no-code email editor to easily create beautiful, engaging email templates that align with your brand[4]. Additionally, customers can contact businesses through various channels, including email and social media[5]."
          },
          {
            "key": "Inbox and Messenger",
            "value": "Yes, Intercom offers both an Inbox and Messenger feature. The Intercom Inbox is a tool built for support at scale, designed to help teams resolve customer issues faster and handle complex customer requests asynchronously with tickets built for cross-functional collaboration[1]. The Inbox is the fastest, most effective, and powerful Inbox built for support at scale[2]. The Messenger, on the other hand, is a customizable messaging platform that can be added to a product, app, or website to build ongoing engagement with customers and foster long-lasting relationships[4]. It allows customers to effortlessly find and act on curated content, and it reduces first-response times[4]. Intercom's Messenger is the most customizable messenger ever, with customizable navigation options, mobile-only in-app types, and integration options that have the app's design in mind[4]. The Messenger also offers features to automate, streamline, and customize customer interactions[5]."
          },
          {
            "key": "Help Center",
            "value": "Yes, Intercom offers a Help Center feature through its Articles product[2][3][6]. The Help Center is a public knowledge base that holds collections of articles that help people understand your product[6]. Customers can search for answers to their questions and find solutions to their problems without needing to contact support[3]. Intercom's Articles product allows you to create, organize, and present your help content, and you can group your articles by collection so that they're easily searchable[3]. You can also import articles from another knowledge base[3]. The Help Center feature is designed to provide self-serve support to your customers, which can reduce the workload on your support team and improve customer satisfaction[2]."
          },
          {
            "key": "Integrations and Custom Apps",
            "value": "Yes, Intercom offers an Integrations and Custom Apps feature. With Intercom, you can connect your tech stack and integrate with various tools to increase team efficiency, improve customer engagement, and personalize customer journeys[1]. Intercom provides over 200 pre-built app integrations in the Intercom App Store[3]. Additionally, you can create custom-built apps for Intercom Messenger using their API[3]. This allows you to tailor Intercom to your specific needs and automate tasks across your tech stack[5]."
          },
          {
            "key": "User Management",
            "value": "Intercom offers various features for customer engagement and support, but it does not have a specific feature called \"User Management\"[1]. However, Intercom provides functionalities that allow you to capture customer feedback, store customer responses as user attributes, and use them to trigger actions[1]. It also offers an AI assist Inbox feature that reduces the cognitive load on support representatives and provides customers with better quality answers[2]. Additionally, Intercom has introduced AI-powered beta features, including a conversation summarization tool, which allows managers to instantly summarize conversations between their team and customers[3]. While Intercom does not have a dedicated \"User Management\" feature, it provides a range of tools and capabilities to engage with customers and support their needs."
          },
          {
            "key": "Pricing",
            "value": "Intercom offers different plans with different features that enable businesses to engage with their customers in different ways[1]. The plans include Support, Engage, and Convert, with each containing a unique set of features and available add-ons to suit different needs[2]. Intercom also has a Starter plan that is perfect for small businesses supporting, onboarding, and engaging customers[4]. However, none of the search results specifically mention a pricing feature offered by Intercom. Instead, Intercom's pricing is based on two metrics: seats and the number of people reached by a workspace[2][4][5]. The price for Engage is based on two factors: seats and the number of people reached by a workspace[2]. Therefore, while Intercom does not offer a pricing feature, it does have different pricing plans based on the number of seats and people reached."
          }
        ]
      }
    ],
    "swots": [
      {
        "companyId": 7,
        "strengths": "Gorgias is a well-known philosopher and rhetorician, with a significant influence on the development of Western philosophy. Gorgias' work has been studied and analyzed by scholars for centuries, providing a wealth of information and insights.",
        "weaknesses": "Gorgias' ideas and arguments have been criticized for lacking substance and being purely rhetorical. Some of Gorgias' views, such as his belief that nothing exists, have been deemed absurd by modern philosophers.",
        "opportunities": "Gorgias' work can be studied and analyzed in the context of modern philosophy and rhetoric, providing new insights and perspectives. Gorgias' ideas can be used as a basis for developing new theories and arguments in philosophy and rhetoric.",
        "threats": "Gorgias' ideas and arguments may become outdated or irrelevant as new theories and perspectives emerge in philosophy and rhetoric. Gorgias' work may be misinterpreted or misunderstood by modern scholars, leading to inaccurate or incomplete analyses."
      },
      {
        "companyId": 8,
        "strengths": "Innovative and comprehensive customer communication platform. Strong focus on user experiences and nurturing relevant connections. Leading customer messaging platform that enables seamless and personalized customer support.",
        "weaknesses": "Competition from other companies in the communication and support sector. Need to constantly innovate and adapt to remain relevant.",
        "opportunities": "Growing market for customer communication platforms. Potential for sustainable growth and success by connecting businesses with their customers.",
        "threats": "Competition from other companies offering robust and user-friendly platforms. Rapidly changing digital landscape and customer expectations."
      }
    ]
  }
;


  //This is tentative functions to access DB
  const [data, setData] = useState([]);

  // const getData = async () => {
  //   const { data } = await axios.get('/api/comparisons');
  //   setData(data);
  // }

  // useEffect(() => {
  //   fetch('./data.json')
  //     .then(response => response.json())
  //     .then(jsonData => {
  //       console.log(jsonData)
  //       setData(jsonData); // Store the fetched JSON data in state
  //     })
  //     .catch(error => {
  //       console.error('Error loading JSON:', error);
  //     });
  // }, []);

  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <TableOfContents />
        </Col>
        <Col className="my-5 me-5">
          <Row>
            <h1 className="text-center mb-5">Your Company VS. The World</h1>
          </Row>
          <ComparisonTable title="Company Profile" companies={companyData.features}/>
          <SwotAnalysisTable title="Swot Analysis" companies={companyData.swots}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Comparison;
