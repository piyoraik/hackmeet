import { MigrationInterface, QueryRunner } from 'typeorm';

export class portfolio1644237304237 implements MigrationInterface {
  name = 'portfolio1644237304237';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`frame_work\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(20) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`language\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(20) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`recruit\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(36) NOT NULL, \`thumbnail\` varchar(20) NOT NULL, \`content\` text NOT NULL, \`userId\` varchar(25) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`feature\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(20) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`recruit_languages_language\` (\`recruitId\` varchar(36) NOT NULL, \`languageId\` varchar(36) NOT NULL, INDEX \`IDX_1a0a6d780d191b23474f56b732\` (\`recruitId\`), INDEX \`IDX_cf8064390f99d70e9116accaed\` (\`languageId\`), PRIMARY KEY (\`recruitId\`, \`languageId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`recruit_frameworks_frame_work\` (\`recruitId\` varchar(36) NOT NULL, \`frameWorkId\` varchar(36) NOT NULL, INDEX \`IDX_d0cf72992875b9a02ecb95a122\` (\`recruitId\`), INDEX \`IDX_a865ec3e167b08ff234688fbfb\` (\`frameWorkId\`), PRIMARY KEY (\`recruitId\`, \`frameWorkId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`recruit_features_feature\` (\`recruitId\` varchar(36) NOT NULL, \`featureId\` varchar(36) NOT NULL, INDEX \`IDX_5e0bcb31bd18581208972c9714\` (\`recruitId\`), INDEX \`IDX_d589d3b8e0fed6aca71b03556c\` (\`featureId\`), PRIMARY KEY (\`recruitId\`, \`featureId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`recruit_languages_language\` ADD CONSTRAINT \`FK_1a0a6d780d191b23474f56b732b\` FOREIGN KEY (\`recruitId\`) REFERENCES \`recruit\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`recruit_languages_language\` ADD CONSTRAINT \`FK_cf8064390f99d70e9116accaed6\` FOREIGN KEY (\`languageId\`) REFERENCES \`language\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`recruit_frameworks_frame_work\` ADD CONSTRAINT \`FK_d0cf72992875b9a02ecb95a122c\` FOREIGN KEY (\`recruitId\`) REFERENCES \`recruit\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`recruit_frameworks_frame_work\` ADD CONSTRAINT \`FK_a865ec3e167b08ff234688fbfbf\` FOREIGN KEY (\`frameWorkId\`) REFERENCES \`frame_work\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`recruit_features_feature\` ADD CONSTRAINT \`FK_5e0bcb31bd18581208972c97148\` FOREIGN KEY (\`recruitId\`) REFERENCES \`recruit\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`recruit_features_feature\` ADD CONSTRAINT \`FK_d589d3b8e0fed6aca71b03556c9\` FOREIGN KEY (\`featureId\`) REFERENCES \`feature\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`recruit_features_feature\` DROP FOREIGN KEY \`FK_d589d3b8e0fed6aca71b03556c9\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`recruit_features_feature\` DROP FOREIGN KEY \`FK_5e0bcb31bd18581208972c97148\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`recruit_frameworks_frame_work\` DROP FOREIGN KEY \`FK_a865ec3e167b08ff234688fbfbf\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`recruit_frameworks_frame_work\` DROP FOREIGN KEY \`FK_d0cf72992875b9a02ecb95a122c\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`recruit_languages_language\` DROP FOREIGN KEY \`FK_cf8064390f99d70e9116accaed6\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`recruit_languages_language\` DROP FOREIGN KEY \`FK_1a0a6d780d191b23474f56b732b\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_d589d3b8e0fed6aca71b03556c\` ON \`recruit_features_feature\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_5e0bcb31bd18581208972c9714\` ON \`recruit_features_feature\``,
    );
    await queryRunner.query(`DROP TABLE \`recruit_features_feature\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_a865ec3e167b08ff234688fbfb\` ON \`recruit_frameworks_frame_work\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_d0cf72992875b9a02ecb95a122\` ON \`recruit_frameworks_frame_work\``,
    );
    await queryRunner.query(`DROP TABLE \`recruit_frameworks_frame_work\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_cf8064390f99d70e9116accaed\` ON \`recruit_languages_language\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_1a0a6d780d191b23474f56b732\` ON \`recruit_languages_language\``,
    );
    await queryRunner.query(`DROP TABLE \`recruit_languages_language\``);
    await queryRunner.query(`DROP TABLE \`feature\``);
    await queryRunner.query(`DROP TABLE \`recruit\``);
    await queryRunner.query(`DROP TABLE \`language\``);
    await queryRunner.query(`DROP TABLE \`frame_work\``);
  }
}
