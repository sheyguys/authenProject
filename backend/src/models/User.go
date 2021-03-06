package models

import "gopkg.in/mgo.v2/bson"

type User struct {
	ID        bson.ObjectId `json:"id" bson:"_id,omitempty"`
	Picture	string `json:"picture"`
	StudentId	string `json:"studentId"`
	Name	string `json:"name"`
	Major 	string `json:"major"`
	Email		string `json:"email"`
	Subject 	[]*Subject `json:"subject" bson:"subject"`
}
type Users []User
