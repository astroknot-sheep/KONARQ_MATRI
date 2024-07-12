'use client'

import { useState, useEffect } from 'react';
import { List, Card, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import { Api } from '@web/domain';

const { Title } = Typography;

export default function ProfessionalHelp() {
  const [trustedProfessionals, setTrustedProfessionals] = useState([]);
  const router = useRouter();

  const fetchTrustedProfessionals = async () => {
    try {
      const professionals = await Api.User.findMany();
      setTrustedProfessionals(professionals);
    } catch (error) {
      console.error('Failed to fetch trusted professionals:', error);
    }
  };

  useEffect(() => {
    fetchTrustedProfessionals();
  }, []);

  return (
    <div>
      <Title level={2}>Trusted Professionals</Title>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={trustedProfessionals}
        renderItem={professional => (
          <List.Item>
            <Card title={professional.name}>
              <p>{professional.specialty}</p>
              <p>{professional.contact}</p>
              <a onClick={() => router.push(`/profile/${professional.id}`)}>View Profile</a>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}
