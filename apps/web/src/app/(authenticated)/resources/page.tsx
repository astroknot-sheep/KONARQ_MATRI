'use client'

import React, { useEffect, useState } from 'react';
import { List, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import { Api, Model } from '@web/domain';

const { Title, Text, Paragraph } = Typography;

export default function HelpfulResources() {
  const [resources, setResources] = useState<Model.BillingProduct[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const fetchedResources = await Api.Billing.findManyProducts();
        setResources(fetchedResources);
      } catch (error) {
        console.error('Error fetching resources:', error);
      }
    };

    fetchResources();
  }, []);

  return (
    <div>
      <Title level={2}>Helpful Resources</Title>
      <List
        itemLayout="horizontal"
        dataSource={resources}
        renderItem={resource => (
          <List.Item>
            <List.Item.Meta
              title={
                <a onClick={() => router.push(`/resources/${resource.id}`)}>
                  {resource.name}
                </a>
              }
              description={resource.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
