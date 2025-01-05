using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using UnityEngine;


public class PlayerMovement : MonoBehaviour
{

    public float moveSpeed;

    [Header("Movement")]

    public Transform orientation;

    public float horizontalInput;
    public float verticalInput;
	
    Vector3 moveDirection;

    Rigidbody rb;



    void Start
    {

        rb = GetComponent.<Rigidbody>();
        rb.freezeRotation = true;   

    }
        



    

    void FixedUpdate
    {

        MovePlayer();

    }

    private void MyInput
    {



        horizonalInput = Input.GetAxisRaw("Horizontal");
        verticalInput = Input.GetAxisRaw("Vertical");

    }
  

    private void MovePlayer
    {

        moveDirection = orientation.forward * verticalInput + orientation.right;
        rb.AddForce(moveDirection.normalized * moveSpeed * 10f, ForceMode.Force);



    }

}
