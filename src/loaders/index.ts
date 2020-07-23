import express from 'express';
import expressLoader from './express';
import mariadbLoader from './mariadb';

export default async ({ expressApp }: any) => {
  await expressLoader({ app: expressApp });
  await mariadbLoader();
}