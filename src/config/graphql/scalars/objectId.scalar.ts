import { ObjectId } from 'mongodb';
import { GraphQLScalarType, Kind, ValueNode } from 'graphql';

export const ObjectIdScalar = new GraphQLScalarType({
  name: 'ObjectId',
  description: 'A simple ObjectId parser',
  serialize: (value: string): string => value,
  parseValue: (value: string): string => ObjectId(value),
  parseLiteral: (ast: ValueNode): string | null => (ast.kind === Kind.STRING ? ObjectId(ast.value) : null),
});
