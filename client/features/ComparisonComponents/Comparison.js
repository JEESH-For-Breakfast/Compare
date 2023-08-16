import React, { useContext, useEffect, useState } from "react";
import TableOfContents from "./TableOfContents";
import CompanyProfileTable from "./CompanyProfileTable";
import SwotAnalysisTable from "./SwotAnalysisTable";
import ProductProfileTable from "./ProductProfileTable";
import MarketApproachTable from "./MarketApproachTable";
import TakeawaysTable from "./TakeawaysTable";
import { Container, Row, Col, Offcanvas, Button } from "react-bootstrap";
import axios from "axios";
import ComparisonTable from "./ComparisonTable";
import { CaretRight } from "react-bootstrap-icons";

const Comparison = () => {
  const companyData = {
    features: [
      {
        companyId: 44,
        features: [
          {
            key: "Customizable design",
            value:
              "Yes, Zendesk offers customizable design features. Users can create custom pages from scratch and link to them from anywhere in their help center or from any other web page or application[3]. They can also customize the HTML templates for email notifications extensively[2]. Zendesk also offers custom themes that provide a fully tailored help center to match a user's brand ID[5]. Additionally, users can fine-tune their help center customization by optimizing the search experience, improving content architecture, and utilizing popular help center features[6]. However, Zendesk does not provide support for custom coding[2].",
          },
          {
            key: "Customer feedback capture",
            value:
              "Yes, Zendesk offers customer feedback capture features. Zendesk enables businesses to gather customer feedback, review the data, and make improvements that align with company goals[3]. Here are some ways to capture customer feedback using Zendesk:\n\n- **Collect customer feedback as raw data**: This process could involve compiling social media responses or sending customer satisfaction surveys via email or text[3].\n- **Use a robust cloud ticketing system**: Analyze ticketing data to identify your customers' most common questions and concerns[2].\n- **Categorize feedback topics**: Use Zendesk to categorize feedback topics and support ticket history to find which issues arise most frequently so you can act on them quickly[4].\n- **Integrate with ChatGPT Ticket Summary by Premium Plus App**: This app summarizes tickets, captures sentiment and intent, and gives insight on Zendesk tickets right next to the ticket[5].\n- **Automate follow-ups and check-ins**: Automate follow-ups and check-ins for open tickets to gather qualitative feedback and ask additional questions after the issue is resolved[4].\n\nZendesk's customer feedback software can help businesses collaborate with their customers and make data-driven decisions[1]. By acting on customer feedback, businesses can address problems, expand upon aspects of their business that customers like, and show their audience that they care[3].",
          },
          {
            key: "Cloud-based customer service platform",
            value:
              "Yes, Zendesk offers a cloud-based customer service platform feature. Zendesk is a leading customer support software platform that combines help desk features like ticketing and a Help Center with live chat and voice software. It is a cloud-based customer service platform that is designed to improve communication between the company and its customers. Zendesk is particularly powerful due to skill-based routing rules, which makes it easier to funnel your customers to the right support agent. Zendesk offers a complete customer service solution that is powerful yet easy to use and works right out of the box for a fast time to value. It is designed to help customer service agents work better together, maximizing their time and energy. Zendesk is versatile and can be used by universities, healthcare providers, financial institutions, e-commerce businesses, SaaS startups, and everything in between to achieve different goals. Zendesk is a multichannel customer service app that utilizes AI-powered bots and a robust ticketing system. It offers self-service, audio calls, and reporting capabilities, making it an excellent choice for businesses of all sizes[1][3][5].",
          },
          {
            key: "Helpdesk support including ticket management and automation",
            value:
              "Yes, Zendesk offers a helpdesk support system that includes ticket management and automation features. Zendesk's Support Suite includes an automated ticketing system that uses machine learning to receive and process customer tickets[1]. The ticket management system allows you to collect helpdesk requests from various channels such as email, social media messaging, and chat, and track conversations in one central inbox[2]. You can easily assign tickets, add tags, use custom fields, and organize tickets into folders/views[3]. Additionally, Zendesk offers automation features such as ticket routing, escalation, alerts, and scripted responses[1]. This helps streamline your support workflow and allows your agents to respond to customer issues quickly[2]. Overall, Zendesk's helpdesk support system provides the necessary tools for efficient ticket management and automation.",
          },
          {
            key: "Call center features (call routing, recording, voicemail)",
            value:
              "Yes, Zendesk offers call center features such as call routing, recording, and voicemail. Their call center software, known as Zendesk Talk, is embedded in the Zendesk Agent Workspace for a seamless customer experience[1]. Some of the features offered by Zendesk's call center software include:\n\n- Call routing: Zendesk's solution provides interactive voice response (IVR) routing, group routing, and overflow and after-hours routing to ensure callers reach the right agent at the right time[5].\n\n- Call recording: Zendesk Talk automatically records details about a call, including the number dialed from, talk time, location, and the agent who answered the call[6].\n\n- Voicemail: Zendesk's call center software allows callers to leave voicemails when agents are unavailable[1].\n\nIn addition to these features, Zendesk's call center software also offers other functionalities such as call sentiment analysis, real-time text transcription, voice recognition, and omnichannel support[1]. It integrates with other channels and allows agents to see customer information right away, enabling businesses to measure and improve their phone support operations[2].\n\nOverall, Zendesk's call center software provides a comprehensive solution for managing and improving phone support operations.",
          },
          {
            key: "Customer support channels (live chat, email marketing, social media, mobile)",
            value:
              "Yes, Zendesk offers a Customer support channels feature that includes live chat, email, social media, mobile, and more[2][4][5][6]. The Zendesk Suite plan enables businesses to deliver personalized customer support across all of their business channels, including messaging across web, mobile, and social media, email, voice, SMS, and live chat support[2][5][6]. Zendesk integrates with social media platforms like Twitter and Facebook, and conversations on those networks can automatically be converted into tickets, allowing agents to respond to and resolve issues as effectively as any other channel[1]. Zendesk's messaging capability enables customers to request support, converse with the customizable messaging bot, and connect with an agent if they need further assistance. Messaging conversations become tickets that agents can update after the conversation ends. You can add messaging to your website, help center, mobile apps, and social channels[5]. Zendesk's live chat software enhances real-time interactions, while messaging allows for asynchronous conversations, meaning customers can pause a conversation on one channel and pick it up on another at a more convenient time[4].",
          },
          {
            key: "Analytics and reporting including insights into customer engagement and support metrics",
            value:
              "Yes, Zendesk offers analytics and reporting features that provide insights into customer engagement and support metrics. Zendesk Explore is a reporting and analytics tool designed to help users analyze, understand, and share business information[1]. It provides powerful, prebuilt reports that help users view and analyze key information about their customers, support resources, and more. Zendesk provides prebuilt dashboards that contain information about product metrics, agent activity, and more. Depending on the Explore plan, users can use the prebuilt dashboards, create editable copies of them, or create completely new dashboards[1][2]. Zendesk Explore is accessed from the Zendesk product tray[2]. Zendesk's reporting and analytics software, known as Zendesk Explore, gives users instant access to customer insights that can make their business better[4]. The software provides powerful reporting to understand past trends and take action on what's happening in the moment[4]. Users can also use the legacy Reporting Overview to gain insight into how Zendesk Support is performing. It provides data about ticket volume and management, and enables users to compare key ticket metrics within Zendesk Support and with their peers[5].",
          },
          {
            key: "Customization, integration and platform tools",
            value:
              "Yes, Zendesk offers customization, integration, and platform tools as part of its features. Here is a summary of the relevant information from the search results:\n\n- Zendesk Platform features include the ability to adapt the agent user interface, tailor Zendesk with no code configuration tools, build custom apps using the Zendesk apps framework, integrate support natively into mobile apps and websites, and use a comprehensive set of APIs for customization[1].\n- Zendesk Suite is an open and flexible CRM platform that allows developers to create custom apps, connect to external customer data, and extend the functionality of Zendesk[2].\n- Zendesk offers customer service software that is customizable and works out of the box. It allows for seamless communication, personalized customer experiences, and consolidation of interactions in one place through support channels like email, chat, and phone[3].\n- Zendesk Enterprise provides the ability to customize support by providing agents with a unified customer profile across channels and interaction history[4].\n- Zendesk offers AI-powered features that help agents be more productive, including ticket comment summarization and enhancement using generative AI[5].\n- Zendesk's bot builder allows for easy customization and deployment of bots across messaging channels without requiring any code. It also provides AI-powered content cues for improving knowledge bases[6].\n\nIn summary, Zendesk offers a range of customization, integration, and platform tools to tailor its customer service software to the specific needs of businesses and enhance the customer support experience.",
          },
          {
            key: "Messaging platform with targeted messages and conversation automation",
            value:
              "Yes, Zendesk offers a messaging platform with targeted messages and conversation automation features. With Zendesk, you can have conversational experiences with your customers across messaging channels, including web, mobile, or social apps. It’s easy to automate right out of the box, or you can customize it with their open and flexible platform. Messaging provides all of these capabilities out-of-the-box. Simply set up a few configuration options and you’ll be ready to go. Establish links to your social and mobile channels easily. Even Flow Builder uses a graphical interface and does not require any code to create or maintain multiple conversation flows. Zendesk's messaging platform allows you to support multiple conversational styles, from live, real-time chat functionality to asynchronous communication with your customers. You can also create conversational bots that can automate deflection options and triage support issues before (or instead of) handing the conversation over to a live agent. Zendesk's messaging platform is available with Zendesk Suite or Support + Chat (Team plan or higher) [1][3][6].",
          },
          {
            key: "Knowledge base creation and management",
            value:
              "Yes, Zendesk offers a Knowledge Base creation and management feature. With Zendesk Guide, you can create a help center that contains your knowledge base articles and the support portal you provide to your customers[3]. The Knowledge Base software provided by Zendesk allows you to create, organize, and share self-service content[1]. You can create language-specific versions of your articles in over 40 different languages, making it accessible to a wide range of users[1]. Zendesk's Knowledge Base software also includes features such as intelligent knowledge management, AI-powered content cues, team and scheduled publishing, content blocks, content tags, and more[1].\n\nUsing Zendesk's Knowledge Base software, you can easily create and track tickets, seek out solutions to customer issues, and ensure that everyone in your organization is working with the most accurate information[4]. It provides an intuitive interface that is easy to use and customize[6]. Additionally, Zendesk offers analytics and dashboards to help you measure and improve customer support[6].\n\nOverall, Zendesk's Knowledge Base software is designed to simplify the process of creating, organizing, and sharing self-service content, making it easier for both customers and support agents to find the information they need[1][2][3].",
          },
          {
            key: "Product tours",
            value:
              'Based on the search results, there is no clear indication that Zendesk offers a specific feature called "Product Tours." However, Zendesk does offer Zendesk Explore, which is an add-on product that provides a base for collecting, measuring, and analyzing data about customers and their experience[2]. Additionally, Zendesk for Service is an end-to-end solution for managing customer service experience, including help desk and conversational messaging support[3]. While product tour software is a tool designed for building in-app product tours for user onboarding, it is not clear if Zendesk offers this specific feature[4].',
          },
        ],
      },
      {
        companyId: 43,
        features: [
          {
            key: "Cloud-based customer service platform",
            value:
              "Yes, Intercom offers a cloud-based customer service platform feature[3]. Intercom is a customer service solution that allows businesses to resolve issues faster and boost customer satisfaction while reducing team workload[3]. Intercom's plans contain different features that enable businesses to engage with their customers in different ways[2]. Intercom provides a fully customizable design that allows businesses to align all their brand and business needs while engaging customers in-context and driving action across their journey in the Intercom Messenger[2]. Intercom's platform includes a powerful Inbox built for support at scale, which goes beyond simple live chat and handles complex customer requests asynchronously with tickets built for cross-functional collaboration[2]. Intercom also provides automation features that allow businesses to automatically answer customer questions and resolve simple issues so that their team has more time for personal customer interactions[2]. Intercom's platform is easy to set up and customize, and it does exactly what it says[6].",
          },
          {
            key: "Helpdesk support including ticket management and automation",
            value:
              "Yes, Intercom offers a Helpdesk support including ticket management and automation features. Intercom's ticketing system collects every customer support interaction, whether it comes via a messenger, email, or other channel. The system labels the interaction with an identifying number, issues that ticket ID to the customer, and keeps track of the ticket as it works its way through the behind-the-scenes resolution process, which might require the involvement of multiple teammates[1]. With Intercom's ticketing system, you can support your customers from beginning to end, all within the Intercom Messenger, and consolidate your tools to streamline the support process[4]. Additionally, Intercom offers advanced reporting, custom agent workflows, and detailed reports that shed light on every aspect of your team's performance[6]. Intercom's Helpdesk support is dedicated to optimizing workflows and improving operational efficiency, while helpdesk automation is focused on automating repetitive tasks to save time and effort[5].",
          },
          {
            key: "Call center features (call routing, recording, voicemail)",
            value:
              'Intercom is a live chat and messaging platform that provides customer engagement software with some advanced features[3]. It offers a "Reduce hold times for your customers and move phone conversations to the Messenger" feature, which allows businesses to reduce hold times for customers and move phone conversations to the Messenger[1]. However, it is not clear from the search results whether Intercom offers call center features such as call routing, recording, and voicemail. Therefore, it is recommended to contact Intercom\'s customer support or sales team to inquire about the availability of these features.',
          },
          {
            key: "Customer support channels (live chat, email marketing, social media, mobile)",
            value:
              "Yes, Intercom offers a variety of customer support channels, including live chat, email, social media, and mobile support[1][2][3][4][5]. Intercom's Messenger is the heart of their customer communications strategy, providing a single, powerful platform for personalized support and engagement[1]. With Intercom's AI-powered chatbots and automation tools, businesses can reduce support volumes and increase customer satisfaction[1]. Intercom's Business Messenger also includes bots, apps, in-app messages, and more to connect businesses to customers like never before[2]. Intercom's support software offers a Messenger-first ticketing solution that provides personal, in-context resolutions to any type of customer query, from simple to complex[4][5]. Additionally, Intercom offers over 350 integrations for businesses' favorite tools[4]. Intercom's pricing plans include a variety of support features, such as Fin AI bot for customer service, team inboxes, ticketing, assignment rules and macros, workflows for chatbots and automations, phone deflection to Messenger, multilingual help center, and Salesforce integration[6].",
          },
          {
            key: "Analytics and reporting including insights into customer engagement and support metrics",
            value:
              "Yes, Intercom offers analytics and reporting features that provide insights into customer engagement and support metrics[1][2][3][4][5][6]. Intercom's reports offer a breakdown of everything important to a business, including an overview report that gives a high-level overview of what's going on in the Intercom workspace, people report that shows new users and leads and how they've interacted with the team, and conversations report that shows new inbound messages and replies to the team[1]. Intercom also offers lead generation reports that give a clear look at how a team is generating new leads with Intercom, sales reports that show how sales are performing, and custom reports that help surface valuable insights from customer conversations[1][2]. Additionally, Intercom has an app store that offers analytics tools such as SupporTrends, which provides full sentiment analysis, NPS impact estimation, and feature-based action recommendations to help plot a clear feature and product[3][5]. Recently, Intercom has improved its reporting features, introduced new chart types, and new reports for better insights into customer engagement and support metrics[6].",
          },
          {
            key: "Customization, integration and platform tools",
            value:
              "Yes, Intercom offers customization, integration, and platform tools features. Intercom is a customer service solution that allows users to resolve issues faster and boost customer satisfaction while reducing team workload. Intercom offers a fully customizable design that aligns with all brand and business needs, allowing users to engage customers in-context and drive action across their journey in the Intercom Messenger[1]. Intercom also offers a single, powerful, easy-to-use platform that allows users to get all their automation, conversations, tickets, customer data, and reporting working together seamlessly. Users can maximize team performance by connecting all their other tools to the Intercom platform[2]. Intercom also offers over 200 pre-built app integrations in the Intercom App Store, and each plan comes with different built-in integrations[5]. Additionally, Intercom offers APIs that allow users to seamlessly integrate Intercom with their own product, tech stack, or other tools[4]. Finally, Intercom offers a conversation summarization tool, which is an AI-powered beta feature that allows users to instantly summarize a conversation between their team and the customer, saving time and highlighting areas for improvement within the team[3].",
          },
          {
            key: "Messaging platform with targeted messages and conversation automation",
            value:
              "Yes, Intercom offers a messaging platform with targeted messages and conversation automation features. \n\nIntercom's messaging platform allows businesses to automate conversations using AI-powered chatbots and automation tools. This helps reduce support volumes and increase customer satisfaction[1]. Intercom's Messenger can be integrated into a product, app, or website to build ongoing engagement with customers and foster long-lasting relationships[2]. \n\nWith Intercom's targeted messages feature, businesses can send automated in-app and website messages to connect with people when they are most ready to engage. Messages can be personalized based on user behavior, and the timing of the messages can be specified[3]. This allows businesses to drive growth and maximize the impact of their messages[3].\n\nAdditionally, Intercom offers an AI-powered chatbot called Fin, which is powered by OpenAI's GPT-4 and Intercom's proprietary machine learning technology. This chatbot can converse naturally and provide efficient customer service[5].\n\nOverall, Intercom provides a comprehensive messaging platform with targeted messages and conversation automation features to help businesses engage with their customers effectively.",
          },
          {
            key: "Knowledge base creation and management",
            value:
              "Yes, Intercom offers a Knowledge Base creation and management feature[1][4][6]. The Knowledge Base feature allows businesses to set up a central place for customers to find answers, tips, and other important information when they need it. The feature is optimized for the channels customers use, including websites, mobile apps, in-product messages, or chat. The Knowledge Base feature also allows businesses to create multilingual articles for their global customers for faster self-serve answers. The editor can be used to add images, videos, call-to-action buttons, and interactive guides to articles. Additionally, the Messenger on every article allows customers to instantly start a conversation if they need more help.",
          },
          {
            key: "Product tours",
            value:
              "Yes, Intercom offers a feature called Product Tours[1]. Product Tours are guided experiences that help customers discover and learn about a product, driving adoption and onboarding[1]. Here are some key details about Intercom's Product Tours feature:\n\n- **Drive onboarding and adoption**: Product Tours introduce customers to a product with interactive tours that help them discover everything they need to know[1].\n- **Highlight new features**: Product Tours can be used to boost feature adoption by highlighting what's new in a product at the perfect time[1].\n- **Multipage tours**: Intercom's Product Tours support multipage tours that allow users to click-to-advance and explore different aspects of a product[1].\n- **Targeted audience**: Product Tours can be automatically shown to a target audience on specific pages, such as paid customers visiting a new feature[3].\n- **No code setup**: Onboarding new customers with multi-page tours and automatically showing tours to target audiences can be done without any code[3].\n- **Sharing tours**: Product Tours can be shared with customers in conversations, messages, and bots, making it easy to engage customers everywhere[3].\n\nOverall, Intercom's Product Tours feature provides a powerful and personalized way to onboard and support customers, highlight new features, and drive adoption of a product[4].",
          },
          {
            key: "Customizable design",
            value:
              "Yes, Intercom offers a fully customizable design feature[1]. This feature allows businesses to align their brand and business needs while engaging customers in-context and driving action across their journey in the Intercom Messenger. However, it is important to note that the search results do not provide detailed information on how to customize the design or what specific design elements can be customized.",
          },
          {
            key: "Customer feedback capture",
            value:
              "Yes, Intercom offers several features to capture customer feedback. Here are some of the relevant search results:\n\n- **Feedback by Userfeed**: This is an app available in the Intercom App Store that allows you to capture, manage, and analyze customer feedback seamlessly from Intercom[2].\n\n- **Acute Feedback**: Another app available in the Intercom App Store that allows you to capture, manage, and analyze customer feedback[4][5].\n\n- **Conflux**: This app makes it easy for you to capture feedback from conversations and keep track of what feature ideas are most important to your customers[6].\n\n- **Live Chat**: Intercom's live chat feature is a frictionless way for customers to communicate with you directly and provide feedback[3].\n\n- **Surveys**: Intercom also allows you to create short surveys to ask your customers specific questions regarding features, aspects of your platform, or parts of their experience[3].\n\nOverall, Intercom provides several tools and methods to gather customer feedback and learn about their pain points.",
          },
        ],
      },
    ],
    swots: [
      {
        companyId: 44,
        SWOT: {
          strengths:
            "- Established brand and diverse product offerings[3]\n- Cloud-based helpdesk solution that is easy to deploy[5]\n- Prioritizes customer needs and satisfaction[3]\n- Offers a simple CRM like Zendesk Sell that makes communication between business development teams and other departments effortless[6]",
          weaknesses:
            "- Pricing concerns[3]\n- Does not tell management what to do[4]",
          opportunities: "- Emerging trends and geographic expansion[3]",
          threats: "- Competition in the customer service software industry[3]",
        },
      },
      {
        companyId: 43,
        SWOT: {
          strengths:
            "- Intercom provides a comprehensive solution that centralizes and streamlines customer interactions[1].\n- The company leverages technology and strong partnerships to innovate and outperform competition[1].\n- Intercom prioritizes user experiences and nurturing relevant connections, ensuring that its clients attain sustainable growth[1].",
          weaknesses:
            "- Intercom's pricing is relatively high compared to some of its competitors[1].\n- Intercom's platform may not be suitable for all businesses, particularly those with smaller customer bases[1].",
          opportunities:
            "- Intercom could expand its services to target underserved markets[3].\n- Intercom could develop new products to better serve a wider audience[3].",
          threats:
            "- Intercom faces competition from other customer messaging platforms such as Zendesk, Drift, and Freshchat[1].\n- The market for customer messaging platforms is becoming increasingly competitive, and Intercom must continue to innovate and adapt to remain relevant[1].",
        },
      },
    ],
    articles: [
      { companyId: 44, articles: [] },
      { companyId: 43, articles: [] },
    ],
  };

  //This is tentative functions to access DB
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className="mt-5" closeButton>
          <Offcanvas.Title>Table Sections</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <TableOfContents />
        </Offcanvas.Body>
      </Offcanvas>

      <Row className="my-5">
        <h1 className="text-center">Your Company VS. The World</h1>
      </Row>
      <Row className="sticky-top d-inline-flex">
        <Button
          className="border-0"
          variant="outline-dark"
          size="sm"
          onClick={handleShow}
        >
          <CaretRight size={20} />
        </Button>
      </Row>

      <Row className="mx-5">
        <ComparisonTable
          title="Company Profile"
          companies={companyData.features}
        />
        <SwotAnalysisTable
          title="Swot Analysis"
          companies={companyData.swots}
        />
      </Row>
    </Container>
  );
};

export default Comparison;
