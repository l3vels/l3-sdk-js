/* tslint:disable */
/* eslint-disable */
/**
 * L3vels Api
 * L3vels API for Game developers
 *
 * The version of the OpenAPI document: 0.3
 * Contact: support@l3vels.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Game
 */
export interface Game {
    /**
     * The unique identifier for the Game entity.
     * @type {string}
     * @memberof Game
     */
    id: string;
    /**
     * The name of the Game.
     * @type {string}
     * @memberof Game
     */
    name: string;
    /**
     * A brief description of the Game.
     * @type {string}
     * @memberof Game
     */
    description: string;
    /**
     * The category or genre of the Game.
     * @type {string}
     * @memberof Game
     */
    category: string;
    /**
     * The logo or icon associated with the Game.
     * @type {string}
     * @memberof Game
     */
    logoImage: string;
    /**
     * Additional images associated with the collection, such as screenshots or promotional images.
     * @type {Array<string>}
     * @memberof Game
     */
    medias: Array<string>;
    /**
     * Additional social links associated with the collection
     * @type {Array<string>}
     * @memberof Game
     */
    socialLinks: Array<string>;
    /**
     * The main or featured image associated with the Game. You can set it from the Dashboard as main image.
     * @type {string}
     * @memberof Game
     */
    mainMedia: string;
    /**
     * A unique URL for the game on the L3vels platform.
     * @type {string}
     * @memberof Game
     */
    url: string;
    /**
     * The URL for the Game's website or landing page.
     * @type {string}
     * @memberof Game
     */
    webLink: string;
    /**
     * The link to the Game's Discord server.
     * @type {string}
     * @memberof Game
     */
    discord: string;
    /**
     * The link to the Game's official Twitter account.
     * @type {string}
     * @memberof Game
     */
    twitter: string;
    /**
     * The link to the Game's official Instagram account.
     * @type {string}
     * @memberof Game
     */
    instagram: string;
    /**
     *  A phone number for contacting the Game's developers or support team.
     * @type {string}
     * @memberof Game
     */
    contactPhone: string;
    /**
     * An email address for contacting the Game's developers or support team.
     * @type {string}
     * @memberof Game
     */
    contactEmail: string;
    /**
     * The current status of the Game, such as "Draft", "Active", or "Inactive".
     * @type {string}
     * @memberof Game
     */
    status: string;
    /**
     *  The unique identifier of the account that the Game belongs to. This allows developers to manage multiple Games across multiple accounts.
     * @type {string}
     * @memberof Game
     */
    accountId: string;
    /**
     * The date and time that the Game entity was created.
     * @type {Date}
     * @memberof Game
     */
    createdOn: Date;
    /**
     * The date and time that the Game entity was last modified.
     * @type {Date}
     * @memberof Game
     */
    modifiedOn: Date;
    /**
     * The user or system that created the Game entity.
     * @type {string}
     * @memberof Game
     */
    createdBy: string;
    /**
     * The user or system that last modified the Game entity.
     * @type {string}
     * @memberof Game
     */
    modifiedBy: string;
}

/**
 * Check if a given object implements the Game interface.
 */
export function instanceOfGame(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "category" in value;
    isInstance = isInstance && "logoImage" in value;
    isInstance = isInstance && "medias" in value;
    isInstance = isInstance && "socialLinks" in value;
    isInstance = isInstance && "mainMedia" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "webLink" in value;
    isInstance = isInstance && "discord" in value;
    isInstance = isInstance && "twitter" in value;
    isInstance = isInstance && "instagram" in value;
    isInstance = isInstance && "contactPhone" in value;
    isInstance = isInstance && "contactEmail" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "accountId" in value;
    isInstance = isInstance && "createdOn" in value;
    isInstance = isInstance && "modifiedOn" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "modifiedBy" in value;

    return isInstance;
}

export function GameFromJSON(json: any): Game {
    return GameFromJSONTyped(json, false);
}

export function GameFromJSONTyped(json: any, ignoreDiscriminator: boolean): Game {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'category': json['category'],
        'logoImage': json['logo_image'],
        'medias': json['medias'],
        'socialLinks': json['social_links'],
        'mainMedia': json['main_media'],
        'url': json['url'],
        'webLink': json['web_link'],
        'discord': json['discord'],
        'twitter': json['twitter'],
        'instagram': json['instagram'],
        'contactPhone': json['contact_phone'],
        'contactEmail': json['contact_email'],
        'status': json['status'],
        'accountId': json['account_id'],
        'createdOn': (new Date(json['created_on'])),
        'modifiedOn': (new Date(json['modified_on'])),
        'createdBy': json['created_by'],
        'modifiedBy': json['modified_by'],
    };
}

export function GameToJSON(value?: Game | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'category': value.category,
        'logo_image': value.logoImage,
        'medias': value.medias,
        'social_links': value.socialLinks,
        'main_media': value.mainMedia,
        'url': value.url,
        'web_link': value.webLink,
        'discord': value.discord,
        'twitter': value.twitter,
        'instagram': value.instagram,
        'contact_phone': value.contactPhone,
        'contact_email': value.contactEmail,
        'status': value.status,
        'account_id': value.accountId,
        'created_on': (value.createdOn.toISOString()),
        'modified_on': (value.modifiedOn.toISOString()),
        'created_by': value.createdBy,
        'modified_by': value.modifiedBy,
    };
}
